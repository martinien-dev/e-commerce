/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { authAPI } from '../api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  // Initialize auth state from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setAuthenticated(true);
      } catch {
        console.error('Error loading user from localStorage');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email, password) => {
    try {
      const response = await authAPI.login(email, password);
      if (response.error) {
        return { error: response.error };
      }
      setUser(response.user);
      setAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(response.user));
      return { success: true };
    } catch {
      return { error: 'Login failed' };
    }
  }, []);

  const register = useCallback(async (firstName, lastName, email, password, confirmPassword) => {
    try {
      const response = await authAPI.register(firstName, lastName, email, password, confirmPassword);
      if (response.error) {
        return { error: response.error };
      }
      const userData = {
        id: response.userId,
        firstName: response.firstName,
        lastName: response.lastName,
        email: response.email
      };
      setUser(userData);
      setAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
    } catch {
      return { error: 'Registration failed' };
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await authAPI.logout();
      setUser(null);
      setAuthenticated(false);
      localStorage.removeItem('user');
      return { success: true };
    } catch {
      return { error: 'Logout failed' };
    }
  }, []);

  const value = {
    user,
    loading,
    authenticated,
    login,
    register,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
