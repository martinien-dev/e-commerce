import React from 'react';

// Import profile image
import profileImg from '../assets/profilepic.png';
// Import styles
import './About.css';

export default function About() {

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: profileImg,
      bio: 'Passionate about creating exceptional shopping experiences with over 10 years in e-commerce.'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      image: profileImg,
      bio: 'Tech innovator specializing in scalable web applications and user experience design.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Design',
      image: profileImg,
      bio: 'Creative designer focused on modern aesthetics and intuitive user interfaces.'
    },
    {
      name: 'David Kim',
      role: 'Operations Manager',
      image: profileImg,
      bio: 'Expert in logistics and supply chain management ensuring smooth operations.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '10K+', label: 'Products Sold' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const values = [
    {
      icon: '🌟',
      title: 'Quality First',
      description: 'We source only the highest quality products from trusted manufacturers worldwide.'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Lightning-fast shipping with real-time tracking and reliable delivery services.'
    },
    {
      icon: '💝',
      title: 'Customer Care',
      description: 'Dedicated support team available 24/7 to help with any questions or concerns.'
    },
    {
      icon: '🔒',
      title: 'Secure Shopping',
      description: 'Bank-level security encryption ensures your personal and payment information is safe.'
    }
  ];

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="glass-panel hero-content">
          <h1 className="gradient-text hero-title">About Aura Commerce</h1>
          <p className="hero-subtitle">
            Revolutionizing online shopping with premium quality products, exceptional service,
            and cutting-edge technology since 2020.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="glass-panel mission-content">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            At Aura Commerce, our mission is to create an unparalleled shopping experience that combines
            premium quality products, innovative technology, and exceptional customer service. We believe
            that everyone deserves access to high-quality goods that enhance their lifestyle and bring joy
            to their daily lives.
          </p>
          <div className="mission-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="glass-panel value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-panel team-card">
              <div className="team-photo">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="glass-panel story-content">
          <h2 className="section-title">Our Story</h2>
          <div className="story-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>Founded</h4>
                <p>Aura Commerce was born from a simple idea: make premium shopping accessible to everyone.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h4>Growth</h4>
                <p>Expanded our product catalog and launched our mobile app, reaching 10,000+ customers.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h4>Innovation</h4>
                <p>Introduced AI-powered recommendations and enhanced our logistics network.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>Global Expansion</h4>
                <p>Launched in 15+ countries and introduced multi-language support.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>Excellence</h4>
                <p>Achieved 99% customer satisfaction and processed over 50,000 orders.</p>
              </div>
            </div>
            <div className="timeline-item current">
              <div className="timeline-year">2026</div>
              <div className="timeline-content">
                <h4>Future</h4>
                <p>Continuing to innovate and provide the best shopping experience possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="glass-panel contact-content">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            Have questions about our products or services? We'd love to hear from you!
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <strong>Email</strong><br />
                support@auracommerce.com
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Phone</strong><br />
                +250 792 650 912
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Address</strong><br />
                123 Commerce Street, Tech City, TC 12345
              </div>
            </div>
          </div>
          <div className="contact-buttons">
            <button className="btn-primary">Contact Support</button>
            <button className="btn-secondary">Live Chat</button>
          </div>
        </div>
      </section>
    </div>
  );
}
