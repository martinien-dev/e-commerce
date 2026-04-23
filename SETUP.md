# Aura Commerce - Complete Setup Guide

## Project Overview
Aura Commerce is a full-stack e-commerce platform built with React (frontend) and Node.js/Express (backend), using MySQL for data persistence.

### Technology Stack
- **Frontend**: React 19 with Vite, React Router, i18next (internationalization)
- **Backend**: Express.js 5, Node.js
- **Database**: MySQL
- **Authentication**: bcrypt for password hashing, express-session for session management

---

## Database Setup

### Prerequisites
- MySQL Server installed and running
- Access to MySQL command line or GUI tool (like phpMyAdmin)

### Quick Setup

#### Option 1: Using npm script (Recommended)
From the `backend` directory:
```bash
npm install
npm run init-db
```

#### Option 2: Manual Setup
1. Open MySQL in your command line or GUI
2. Copy and paste the contents of `backend/database_setup.sql`
3. Execute the SQL script

#### What Gets Created
The database setup includes:
- **users** table - User profiles with password hashing
- **categories** table - Product categories (Tops, Bottoms, Footwear, Accessories)
- **products** table - Product inventory with pricing and stock
- **cart** table - Shopping cart items per user
- **orders** table - Customer orders
- **order_items** table - Items within each order
- **reviews** table - Product reviews and ratings

Sample data is automatically inserted for testing.

---

## Backend Setup

### Installation
```bash
cd backend
npm install
```

### Dependencies
- `express` - Web framework
- `mysql` - Database driver
- `bcrypt` - Password hashing
- `express-session` - Session management
- `cors` - Cross-Origin Resource Sharing
- `body-parser` - JSON parsing
- `nodemon` - Dev server with auto-reload

### Running the Server
Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server runs on `http://localhost:5000`

### API Endpoints

#### Authentication
- `POST /api/register` - Register new user
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "securePassword123",
    "confirmPassword": "securePassword123"
  }
  ```

- `POST /api/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```

- `POST /api/logout` - Logout user

#### User Profile (Authenticated)
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

#### Products & Categories
- `GET /api/products` - Get all products
- `GET /api/categories` - Get all categories

#### Shopping Cart (Authenticated)
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart/:cartId` - Remove item from cart

#### Orders (Authenticated)
- `GET /api/orders` - Get user's orders
- `POST /api/orders` - Create new order

---

## Frontend Setup

### Installation
```bash
cd frontend
npm install
```

### Dependencies
- `react` - UI library
- `react-router-dom` - Routing
- `react-i18next` - Internationalization
- `vite` - Build tool
- `lucide-react` - Icon library

### Running the Development Server
```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

### Building for Production
```bash
npm run build
```

### Project Structure
```
frontend/src/
├── api.js                    # API utility functions
├── context/
│   └── AuthContext.jsx       # Authentication state management
├── components/
│   ├── FooterNav.jsx         # Footer navigation
│   └── ProtectedRoute.jsx    # Route protection component
├── pages/
│   ├── Login.jsx             # Login/Signup page
│   ├── Home.jsx              # Home page
│   ├── Store.jsx             # Product store
│   ├── About.jsx             # About page
│   └── Profile.jsx           # User profile
├── i18n.js                   # Internationalization config
└── App.jsx                   # Main app component
```

---

## Features

### ✅ Authentication
- User registration with validation
- Secure password hashing with bcrypt
- Login with session management
- Protected routes (Home, Store, Profile)
- Logout functionality

### ✅ User Management
- User profile creation during signup
- Profile update capability
- Personal information storage

### ✅ Product Management
- Product browsing
- Category filtering
- Product details with pricing and stock info
- Sample products pre-loaded

### ✅ Shopping Cart
- Add products to cart
- Remove items from cart
- Persistent cart per user

### ✅ Orders
- Create orders from cart items
- Order history tracking
- Automatic cart clearing after order

### ✅ Internationalization
- English and French language support
- Language toggle on login page

---

## Complete Workflow

### 1. Start the Database
Ensure MySQL is running and database is initialized with:
```bash
cd backend
npm run init-db
```

### 2. Start the Backend Server
```bash
cd backend
npm run dev
```
Expected output:
```
Aura Commerce API Server running on port 5000
Connected to MySQL database successfully
```

### 3. Start the Frontend Server
In a new terminal:
```bash
cd frontend
npm run dev
```
Expected output:
```
Local: http://localhost:5173/
```

### 4. Access the Application
- Open browser and go to `http://localhost:5173`
- You'll see the login page with Sign Up option
- Create new account or login with existing credentials

---

## Testing

### Test Account Creation
1. Click "Sign Up" tab on login page
2. Enter:
   - First Name: `John`
   - Last Name: `Doe`
   - Email: `john@example.com`
   - Password: `password123` (at least 6 characters)
   - Confirm Password: `password123`
3. Click "Sign Up" button
4. Should redirect to home page

### Test Login
1. Enter registered email and password
2. Click "Login" button
3. Should redirect to home page

### Test Product Browsing
1. After login, navigate to "Store" page
2. Browse products by category
3. View product details

### Test Shopping Cart
1. Add products to cart from store
2. View cart items
3. Remove items if needed

### Test Orders
1. Go to cart
2. Proceed to checkout
3. Create order
4. View order history in profile

---

## Troubleshooting

### Database Connection Error
**Problem**: "Database not connected"
**Solution**:
1. Ensure MySQL service is running
2. Run `npm run init-db` from backend folder
3. Check database credentials in `backend/server.js`

### CORS Error
**Problem**: API calls blocked with CORS error
**Solution**:
1. Ensure backend is running on port 5000
2. Frontend should be on port 5173
3. CORS is already configured in server.js

### Port Already in Use
**Problem**: Port 5000 or 5173 already in use
**Solution**:
1. Find process using the port: `netstat -ano | findstr :5000` (Windows)
2. Kill process: `taskkill /PID [PID] /F`
3. Alternatively, modify PORT in backend/server.js or vite.config.js

### Module Not Found
**Problem**: "Cannot find module" error
**Solution**:
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

---

## Security Considerations

✅ **Implemented**
- Passwords hashed with bcrypt (10 salt rounds)
- Session-based authentication
- Protected routes on frontend and backend
- Input validation on registration
- Email format validation

⚠️ **Recommended for Production**
- HTTPS/SSL certificates
- Environment variables for sensitive data
- Rate limiting on authentication endpoints
- CSRF protection
- SQL injection prevention (already using parameterized queries)
- Password reset functionality
- Two-factor authentication
- Regular security audits

---

## Environment Variables

Create `.env` file in backend folder (optional, currently uses defaults):
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=aura_commerce
PORT=5000
SESSION_SECRET=your_secret_key_here
```

---

## Common Tasks

### Add New Category
1. Modify `backend/database_setup.sql` - Insert into categories table
2. Re-run database setup, or
3. Create backend endpoint to add categories dynamically

### Add New Product
1. Use database insert command:
```sql
INSERT INTO products (name, description, price, category_id, stock_quantity, rating) 
VALUES ('Product Name', 'Description', 99.99, 1, 50, 4.5);
```

### View Database
Using MySQL command line:
```bash
mysql -u root aura_commerce
SELECT * FROM users;
SELECT * FROM products;
SELECT * FROM orders;
```

---

## Next Steps & Future Enhancements

1. **Payment Integration**
   - Stripe or PayPal integration
   - Payment processing

2. **Admin Dashboard**
   - Product management
   - Order management
   - User management

3. **Additional Features**
   - Wishlist functionality
   - Product search
   - Advanced filtering
   - Email notifications
   - Inventory alerts

4. **Performance**
   - Caching strategies
   - Database optimization
   - Image compression

5. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests

---

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review API endpoints documentation
3. Check browser console for errors (Frontend)
4. Check terminal for server errors (Backend)

---

**Project Status**: ✅ Production Ready (with recommended security enhancements)
**Last Updated**: April 2026
