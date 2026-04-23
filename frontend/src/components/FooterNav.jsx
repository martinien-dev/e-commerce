import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Search, User, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './FooterNav.css';

export default function FooterNav() {
  const { t } = useTranslation();
  const location = useLocation();

  // Do not show footer nav on the login page
  if (location.pathname === '/' || location.pathname === '/login') {
    return null;
  }

  return (
    <nav className="footer-nav glass-panel">
      <NavLink to="/home" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Home size={24} />
        <span>{t('nav.home')}</span>
      </NavLink>
      <NavLink to="/store" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Search size={24} />
        <span>{t('nav.store')}</span>
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Info size={24} />
        <span>{t('nav.about')}</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <User size={24} />
        <span>{t('nav.profile')}</span>
      </NavLink>
    </nav>
  );
}
