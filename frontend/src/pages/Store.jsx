import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { productAPI, cartAPI } from '../api';

// Import product images
import buggyPantsImg from '../assets/baggy.jpg';
import tshirtImg from '../assets/hoodie.jpg'; // Using hoodie as t-shirt alternative
import socksImg from '../assets/comfortsocks.jpg';
import runningShoesImg from '../assets/runningshoes.jpg';
import airMaxImg from '../assets/airmax.jpg';
import shoxImg from '../assets/shox.jpg';
import hoodieImg from '../assets/hoodie.jpg';
import walletImg from '../assets/wallet.jpg';

export default function Store() {
  const navigate = useNavigate();
  const { authenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [_loading, setLoading] = useState(true);

  const categories = [
    { id: 'All', name: 'All Categories', icon: '🛍️' },
    { id: 'Tops', name: 'Tops', icon: '👕' },
    { id: 'Bottoms', name: 'Bottoms', icon: '👖' },
    { id: 'Footwear', name: 'Footwear', icon: '👟' },
    { id: 'Accessories', name: 'Accessories', icon: '👜' }
  ];

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productAPI.getProducts();
        if (response && Array.isArray(response)) {
          // Map API products to frontend format with images
          const productsWithImages = response.map(product => {
            let image;
            switch (product.name.toLowerCase()) {
              case 'buggy pants':
                image = buggyPantsImg;
                break;
              case 'classic t-shirt':
                image = tshirtImg;
                break;
              case 'comfort socks':
                image = socksImg;
                break;
              case 'running shoes':
                image = runningShoesImg;
                break;
              case 'nike air max':
                image = airMaxImg;
                break;
              case 'nike shox':
                image = shoxImg;
                break;
              default:
                image = hoodieImg; // fallback image
            }
            return {
              ...product,
              image,
              category: getCategoryFromId(product.category_id),
              stock: product.stock_quantity,
              rating: product.rating,
              reviews: 50 // placeholder
            };
          });
          setProducts(productsWithImages);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to hardcoded products if API fails
        setProducts(getFallbackProducts());
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getCategoryFromId = (categoryId) => {
    const categoryMap = {
      1: 'Tops',
      2: 'Bottoms',
      3: 'Footwear',
      4: 'Accessories'
    };
    return categoryMap[categoryId] || 'Accessories';
  };

  const getFallbackProducts = () => [
    {
      id: 1,
      name: 'Buggy Pants',
      description: 'Comfortable and stylish pants perfect for any occasion',
      price: 49.99,
      category: 'Bottoms',
      image: buggyPantsImg,
      stock: 50,
      rating: 4.5,
      reviews: 128
    },
    {
      id: 2,
      name: 'Classic T-Shirt',
      description: 'Premium cotton t-shirt with modern fit',
      price: 24.99,
      category: 'Tops',
      image: tshirtImg,
      stock: 100,
      rating: 4.2,
      reviews: 89
    },
    {
      id: 3,
      name: 'Comfort Socks',
      description: 'Soft and breathable socks for all-day comfort',
      price: 12.99,
      category: 'Accessories',
      image: socksImg,
      stock: 200,
      rating: 4.7,
      reviews: 256
    },
    {
      id: 4,
      name: 'Running Shoes',
      description: 'High-performance running shoes with advanced cushioning',
      price: 89.99,
      category: 'Footwear',
      image: runningShoesImg,
      stock: 30,
      rating: 4.8,
      reviews: 167
    },
    {
      id: 5,
      name: 'Nike Air Max',
      description: 'Iconic Nike Air Max with legendary comfort',
      price: 129.99,
      category: 'Footwear',
      image: airMaxImg,
      stock: 25,
      rating: 4.9,
      reviews: 203
    },
    {
      id: 6,
      name: 'Nike Shox',
      description: 'Revolutionary Nike Shox technology for ultimate support',
      price: 149.99,
      category: 'Footwear',
      image: shoxImg,
      stock: 20,
      rating: 4.6,
      reviews: 145
    },
    {
      id: 7,
      name: 'Designer Hoodie',
      description: 'Premium hoodie with unique design and superior comfort',
      price: 79.99,
      category: 'Tops',
      image: hoodieImg,
      stock: 40,
      rating: 4.4,
      reviews: 98
    },
    {
      id: 8,
      name: 'Leather Wallet',
      description: 'Genuine leather wallet with multiple card slots',
      price: 39.99,
      category: 'Accessories',
      image: walletImg,
      stock: 75,
      rating: 4.3,
      reviews: 76
    }
  ];

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const addToCart = async (product) => {
    if (!authenticated) {
      // Redirect to login if not authenticated
      navigate('/login');
      return;
    }

    try {
      // Add to backend cart
      const response = await cartAPI.addToCart(product.id, 1);
      if (response.error) {
        console.error('Error adding to cart:', response.error);
        alert('Failed to add item to cart. Please try again.');
        return;
      }

      // Update local cart state for UI feedback
      setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === product.id);
        if (existingItem) {
          return prevCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });

      alert('Item added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="page-content">
      {/* Header */}
      <section className="store-header">
        <div className="glass-panel header-content">
          <h1 className="gradient-text hero-title">Our Store</h1>
          <p className="hero-subtitle">
            Discover premium products curated just for you. From trendy fashion to essential accessories,
            find everything you need in one place.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="store-filters">
        <div className="glass-panel filters-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="filter-controls">
            <div className="category-filter">
              <label>Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="sort-filter">
              <label>Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          <div className="cart-summary">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{getCartItemCount()}</span>
            <span className="cart-total">${getCartTotal().toFixed(2)}</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="glass-panel product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-stock">
                  {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                </div>
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-rating">
                  <div className="stars">
                    {'⭐'.repeat(Math.floor(product.rating))}
                    {product.rating % 1 !== 0 && '⭐'}
                  </div>
                  <span className="rating-text">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="product-price">
                  <span className="price">${product.price.toFixed(2)}</span>
                </div>

                <button
                  className="btn-primary add-to-cart-btn"
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <div className="glass-panel no-products-content">
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          </div>
        )}
      </section>

      {/* Cart Modal Preview */}
      {cart.length > 0 && (
        <section className="cart-preview">
          <div className="glass-panel cart-preview-content">
            <h3>Cart Preview</h3>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity} × ${item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <strong>Total: ${getCartTotal().toFixed(2)}</strong>
            </div>
            <div className="cart-actions">
              <button className="btn-secondary">View Full Cart</button>
              <button className="btn-primary">Checkout</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
