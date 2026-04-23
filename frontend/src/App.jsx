import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Providers
import { AuthProvider } from './context/AuthContext'

// Components
import FooterNav from './components/FooterNav'
import { ProtectedRoute } from './components/ProtectedRoute'

// Pages
import Login from './pages/Login'
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import Profile from './pages/Profile'

function AppContent() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <FooterNav />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
