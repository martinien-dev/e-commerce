const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
const PORT = 5000;
const SALT_ROUNDS = 10;

// Middleware
app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'aura_commerce_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: 'lax'
  }
}));

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aura_commerce',
  connectTimeout: 5000, // 5 second timeout
  acquireTimeout: 5000,
  timeout: 5000
});

db.connect((err) => {
  if (err) {
    console.log('❌ Database connection failed:', err.message);
    console.log('💡 Make sure MySQL is running and database "aura_commerce" exists');
    console.log('💡 Run: npm run init-db');
    console.log('🔄 Server will continue without database - using sample data');
  } else {
    console.log('✅ Connected to MySQL database successfully');
  }
});

// Handle database connection errors
db.on('error', (err) => {
  console.log('Database error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.log('Database connection was closed.');
  }
  if (err.code === 'ER_CON_COUNT_ERROR') {
    console.log('Database has too many connections.');
  }
  if (err.code === 'ECONNREFUSED') {
    console.log('Database connection was refused.');
  }
});

// Sample products data (fallback when DB not connected)
const sampleProducts = [
  { id: 1, name: 'Buggy Pants', price: 49.99, category: 'Bottoms', stock_quantity: 50 },
  { id: 2, name: 'Classic T-Shirt', price: 24.99, category: 'Tops', stock_quantity: 100 },
  { id: 3, name: 'Comfort Socks', price: 12.99, category: 'Accessories', stock_quantity: 200 },
  { id: 4, name: 'Running Shoes', price: 89.99, category: 'Footwear', stock_quantity: 30 },
  { id: 5, name: 'Nike Air Max', price: 129.99, category: 'Footwear', stock_quantity: 25 },
  { id: 6, name: 'Nike Shox', price: 149.99, category: 'Footwear', stock_quantity: 20 }
];

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
};

// ===== AUTHENTICATION ENDPOINTS =====

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Insert user into database
    db.query(
      'INSERT INTO users (first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, hashedPassword],
      (err, results) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'Email already exists' });
          }
          console.error('Database error during registration:', err);
          return res.status(500).json({ error: 'Registration failed - database unavailable' });
        }

        // Set session
        req.session.userId = results.insertId;
        req.session.email = email;

        res.status(201).json({
          message: 'Registration successful',
          userId: results.insertId,
          email: email,
          firstName: firstName,
          lastName: lastName
        });
      }
    );
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      console.error('Database error during login:', err);
      return res.status(500).json({ error: 'Login failed - database unavailable' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];

    try {
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password_hash);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Set session
      req.session.userId = user.id;
      req.session.email = user.email;

      res.json({
        message: 'Login successful',
        user: {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.json({ message: 'Logged out successfully' });
  });
});

// Get current user
app.get('/api/user/profile', isAuthenticated, (req, res) => {
  db.query('SELECT id, first_name, last_name, email, phone, address, city, state, postal_code, country, bio FROM users WHERE id = ?', [req.session.userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch user' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = results[0];
    res.json({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      city: user.city,
      state: user.state,
      postalCode: user.postal_code,
      country: user.country,
      bio: user.bio
    });
  });
});

// Update user profile
app.put('/api/user/profile', isAuthenticated, (req, res) => {
  const { firstName, lastName, phone, address, city, state, postalCode, country, bio } = req.body;

  db.query(
    'UPDATE users SET first_name = ?, last_name = ?, phone = ?, address = ?, city = ?, state = ?, postal_code = ?, country = ?, bio = ? WHERE id = ?',
    [firstName || '', lastName || '', phone || '', address || '', city || '', state || '', postalCode || '', country || '', bio || '', req.session.userId],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update profile' });
      }
      res.json({ message: 'Profile updated successfully' });
    }
  );
});

// API Routes

// ===== PRODUCTS & CATEGORIES =====

app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.log('Using sample data - database not connected');
      return res.json(sampleProducts);
    }
    res.json(results);
  });
});

app.get('/api/categories', (req, res) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      const categories = [
        { id: 1, name: 'Tops', icon: 'T' },
        { id: 2, name: 'Bottoms', icon: 'B' },
        { id: 3, name: 'Footwear', icon: 'F' },
        { id: 4, name: 'Accessories', icon: 'A' }
      ];
      return res.json(categories);
    }
    res.json(results);
  });
});

// ===== CART ENDPOINTS =====

app.get('/api/cart', isAuthenticated, (req, res) => {
  db.query(
    `SELECT c.id, c.product_id, c.quantity, p.name, p.price, p.image_url 
     FROM cart c 
     JOIN products p ON c.product_id = p.id 
     WHERE c.user_id = ?`,
    [req.session.userId],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to fetch cart' });
      }
      res.json(results);
    }
  );
});

app.post('/api/cart', isAuthenticated, (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity || quantity < 1) {
    return res.status(400).json({ error: 'Invalid product or quantity' });
  }

  db.query(
    'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?',
    [req.session.userId, productId, quantity, quantity],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to add to cart' });
      }
      res.json({ message: 'Item added to cart' });
    }
  );
});

app.delete('/api/cart/:cartId', isAuthenticated, (req, res) => {
  db.query('DELETE FROM cart WHERE id = ? AND user_id = ?', [req.params.cartId, req.session.userId], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to remove from cart' });
    }
    res.json({ message: 'Item removed from cart' });
  });
});

// ===== ORDER ENDPOINTS =====

app.get('/api/orders', isAuthenticated, (req, res) => {
  db.query('SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC', [req.session.userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to fetch orders' });
    }
    res.json(results);
  });
});

app.post('/api/orders', isAuthenticated, (req, res) => {
  const { totalPrice, shippingAddress, shippingCity, shippingState, shippingPostalCode, shippingCountry, paymentMethod } = req.body;

  if (!totalPrice || !shippingAddress) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Start transaction
  db.query('START TRANSACTION', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to create order' });
    }

    // Create order
    db.query(
      'INSERT INTO orders (user_id, total_price, shipping_address, shipping_city, shipping_state, shipping_postal_code, shipping_country, payment_method) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [req.session.userId, totalPrice, shippingAddress, shippingCity || '', shippingState || '', shippingPostalCode || '', shippingCountry || '', paymentMethod || 'card'],
      (err, results) => {
        if (err) {
          return db.query('ROLLBACK', () => {
            console.error(err);
            res.status(500).json({ error: 'Failed to create order' });
          });
        }

        const orderId = results.insertId;

        // Get cart items and create order items
        db.query('SELECT * FROM cart WHERE user_id = ?', [req.session.userId], (err, cartItems) => {
          if (err || cartItems.length === 0) {
            return db.query('ROLLBACK', () => {
              res.status(400).json({ error: 'Cart is empty' });
            });
          }

          let itemsProcessed = 0;
          let hasError = false;

          cartItems.forEach(item => {
            db.query(
              'INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) SELECT ?, ?, ?, price FROM products WHERE id = ?',
              [orderId, item.product_id, item.quantity, item.product_id],
              (err) => {
                if (err && !hasError) {
                  hasError = true;
                  return db.query('ROLLBACK', () => {
                    console.error(err);
                    res.status(500).json({ error: 'Failed to create order items' });
                  });
                }

                itemsProcessed++;
                if (itemsProcessed === cartItems.length && !hasError) {
                  // Clear cart
                  db.query('DELETE FROM cart WHERE user_id = ?', [req.session.userId], (err) => {
                    if (err) {
                      return db.query('ROLLBACK', () => {
                        res.status(500).json({ error: 'Failed to clear cart' });
                      });
                    }

                    db.query('COMMIT', () => {
                      res.status(201).json({
                        message: 'Order created successfully',
                        orderId: orderId
                      });
                    });
                  });
                }
              }
            );
          });
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log('Aura Commerce API Server running on port ' + PORT);
  console.log('API available at http://localhost:' + PORT + '/api');
  console.log('\n📋 To set up the database:');
  console.log('   npm run init-db     (from backend folder)');
  console.log('\n📌 Available endpoints:');
  console.log('   POST   /api/register           - Register new user');
  console.log('   POST   /api/login              - Login user');
  console.log('   POST   /api/logout             - Logout user');
  console.log('   GET    /api/user/profile       - Get user profile (authenticated)');
  console.log('   PUT    /api/user/profile       - Update user profile (authenticated)');
  console.log('   GET    /api/products           - Get all products');
  console.log('   GET    /api/categories         - Get all categories');
  console.log('   GET    /api/cart               - Get cart items (authenticated)');
  console.log('   POST   /api/cart               - Add item to cart (authenticated)');
  console.log('   DELETE /api/cart/:cartId       - Remove item from cart (authenticated)');
  console.log('   GET    /api/orders             - Get user orders (authenticated)');
  console.log('   POST   /api/orders             - Create new order (authenticated)');
});
