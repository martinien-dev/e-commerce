import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../api';
import './Login.css';

export default function Login() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [lang, setLang] = useState(i18n.language || 'en');
  const [activeTab, setActiveTab] = useState('login');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Signup form state
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.login(loginData.email, loginData.password);
      
      if (response.error) {
        setError(response.error);
      } else {
        // Store user info in localStorage
        localStorage.setItem('user', JSON.stringify(response.user));
        navigate('/home');
      }
    } catch (err) {
      setError('Connection failed. Make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.register(
        signupData.firstName,
        signupData.lastName,
        signupData.email,
        signupData.password,
        signupData.confirmPassword
      );

      if (response.error) {
        setError(response.error);
      } else {
        // Store user info in localStorage
        localStorage.setItem('user', JSON.stringify(response));
        // Switch to login tab and clear form
        setLoginData({
          email: signupData.email,
          password: ''
        });
        setSignupData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        alert('Registration successful! Redirecting to home...');
        navigate('/home');
      }
    } catch (err) {
      setError('Connection failed. Make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = lang.startsWith('en') ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <div className="login-container">
      {/* Background Decor */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      
      <div className="login-card glass-panel">
        <div className="login-header">
          <h2 className="gradient-text">{t('app.name')}</h2>
          <p>{activeTab === 'login' ? t('login.title') : 'Create Account'}</p>
          <span className="subtitle">
            {activeTab === 'login' ? t('login.subtitle') : 'Join Aura Commerce today'}
          </span>
        </div>

        {/* Tab Navigation */}
        <div className="auth-tabs">
          <button
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('login');
              setError('');
            }}
          >
            {t('login.button')}
          </button>
          <button
            className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('signup');
              setError('');
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* Login Form */}
        {activeTab === 'login' && (
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label>{t('login.email')}</label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
                placeholder={t('login.emailPlaceholder')}
              />
            </div>
            <div className="input-group">
              <label>{t('login.password')}</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                placeholder={t('login.passwordPlaceholder')}
              />
            </div>
            
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Logging in...' : t('login.button')}
            </button>
          </form>
        )}

        {/* Signup Form */}
        {activeTab === 'signup' && (
          <form onSubmit={handleSignup} className="login-form">
            <div className="input-row">
              <div className="input-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={signupData.firstName}
                  onChange={handleSignupChange}
                  required
                  placeholder="John"
                />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={signupData.lastName}
                  onChange={handleSignupChange}
                  required
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="input-group">
              <label>{t('login.email')}</label>
              <input
                type="email"
                name="email"
                value={signupData.email}
                onChange={handleSignupChange}
                required
                placeholder={t('login.emailPlaceholder')}
              />
            </div>
            
            <div className="input-group">
              <label>{t('login.password')}</label>
              <input
                type="password"
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
                required
                placeholder={t('login.passwordPlaceholder')}
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                required
                placeholder="Re-enter password"
              />
            </div>
            
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>
        )}

        <div className="login-footer">
          <button type="button" onClick={toggleLanguage} className="lang-toggle">
            {lang.startsWith('en') ? 'Passer en Français' : 'Switch to English'}
          </button>
        </div>
      </div>
    </div>
  );
}
