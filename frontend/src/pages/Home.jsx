import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Import product images
import buggyPantsImg from '../assets/baggy.jpg';
import tshirtImg from '../assets/hoodie.jpg'; // Using hoodie as t-shirt alternative
import socksImg from '../assets/comfortsocks.jpg';
import runningShoesImg from '../assets/runningshoes.jpg';
import airMaxImg from '../assets/airmax.jpg';
import shoxImg from '../assets/shox.jpg';
import hoodieImg from '../assets/hoodie.jpg';
import walletImg from '../assets/wallet.jpg';

export default function Home() {
  const { t } = useTranslation();

  // Sample products data
  const featuredProducts = [
    {
      id: 1,
      name: 'Buggy Pants',
      price: '$49.99',
      image: buggyPantsImg,
      category: 'Pants'
    },
    {
      id: 2,
      name: 'Classic T-Shirt',
      price: '$24.99',
      image: tshirtImg,
      category: 'Tops'
    },
    {
      id: 3,
      name: 'Comfort Socks',
      price: '$12.99',
      image: socksImg,
      category: 'Accessories'
    },
    {
      id: 4,
      name: 'Running Shoes',
      price: '$89.99',
      image: runningShoesImg,
      category: 'Footwear'
    },
    {
      id: 5,
      name: 'Nike Air Max',
      price: '$129.99',
      image: airMaxImg,
      category: 'Footwear'
    },
    {
      id: 6,
      name: 'Nike Shox',
      price: '$149.99',
      image: shoxImg,
      category: 'Footwear'
    },
    {
      id: 7,
      name: 'Designer Hoodie',
      price: '$79.99',
      image: hoodieImg,
      category: 'Tops'
    },
    {
      id: 8,
      name: 'Leather Wallet',
      price: '$39.99',
      image: walletImg,
      category: 'Accessories'
    }
  ];

  const categories = [
    { name: 'Tops', icon: '👕', count: 25 },
    { name: 'Bottoms', icon: '👖', count: 18 },
    { name: 'Footwear', icon: '👟', count: 32 },
    { name: 'Accessories', icon: '👜', count: 15 }
  ];

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="glass-panel hero-content">
          <h1 className="gradient-text hero-title">{t('app.name')}</h1>
          <p className="hero-subtitle">{t('app.tagline')}</p>
          <div className="hero-actions">
            <Link to="/store" className="btn-primary">Shop Now</Link>
            <button className="btn-secondary">Explore Collections</button>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="search-section">
        <div className="glass-panel search-container">
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="glass-panel category-card">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-count">{category.count} items</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="glass-panel product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price}</p>
                <button className="btn-add-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/store" className="btn-secondary">View All Products</Link>
        </div>
      </section>

      {/* Special Offers */}
      <section className="offers-section">
        <div className="glass-panel offer-banner">
          <div className="offer-content">
            <h2 className="offer-title">🎉 Special Offer!</h2>
            <p className="offer-text">Get 20% off on your first purchase with code: WELCOME20</p>
            <button className="btn-primary">Claim Offer</button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="glass-panel newsletter-container">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-text">Subscribe to get exclusive deals and new product alerts</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="glass-panel testimonial-card">
            <p className="testimonial-text">"Amazing quality and fast shipping! The Nike Shox are perfect for my runs."</p>
            <div className="testimonial-author">
              <span className="author-name">Sarah M.</span>
              <span className="author-rating">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="glass-panel testimonial-card">
            <p className="testimonial-text">"Love the buggy pants! So comfortable and stylish. Will definitely buy more."</p>
            <div className="testimonial-author">
              <span className="author-name">Mike R.</span>
              <span className="author-rating">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <div className="glass-panel testimonial-card">
            <p className="testimonial-text">"Great selection of products. The t-shirts are my favorite go-to items."</p>
            <div className="testimonial-author">
              <span className="author-name">Emma L.</span>
              <span className="author-rating">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
