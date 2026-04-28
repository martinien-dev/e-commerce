import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import profile image
import profileImg from '../assets/profilepic.png';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  // Mock user data - in a real app, this would come from a context or API
  const [userData, setUserData] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    age: 28,
    activityStatus: 'online',
    profilePhoto: profileImg
  });

  const [editData, setEditData] = useState({ ...userData });

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'no', name: 'Norsk', flag: '🇳🇴' },
    { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'he', name: 'עברית', flag: '🇮🇱' },
    { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'bg', name: 'Български', flag: '🇧🇬' },
    { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
    { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
    { code: 'sl', name: 'Slovenščina', flag: '🇸🇮' },
    { code: 'et', name: 'Eesti', flag: '🇪🇪' },
    { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
    { code: 'lt', name: 'Lietuvių', flag: '🇱🇹' }
  ];

  const handleSaveProfile = () => {
    setUserData({ ...editData });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditData({ ...userData });
    setIsEditing(false);
  };

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setShowLanguageMenu(false);
  };

  const handleLogout = () => {
    // In a real app, this would clear authentication tokens and redirect
    alert('Logged out successfully!');
  };

  const handleSwitchAccount = () => {
    // In a real app, this would show account selection
    alert('Account switching feature coming soon!');
  };

  return (
    <div className="page-content">
      {/* Profile Header */}
      <section className="profile-header">
        <div className="glass-panel profile-main">
          <div className="profile-photo-section">
            <div className="profile-photo-container">
              <img src={userData.profilePhoto} alt="Profile" className="profile-photo" />
              {isEditing && (
                <button className="btn-upload-photo">
                  📷 Upload New Photo
                </button>
              )}
            </div>
            <div className="profile-status">
              <span className={`status-indicator ${userData.activityStatus}`}></span>
              <span className="status-text">
                {userData.activityStatus === 'online' ? 'Online' :
                 userData.activityStatus === 'offline' ? 'Offline' : 'Away'}
              </span>
            </div>
          </div>

          <div className="profile-info">
            <h1 className="profile-name">{userData.username}</h1>
            <p className="profile-email">{userData.email}</p>
            <p className="profile-age">Age: {userData.age}</p>

            <div className="profile-actions">
              {!isEditing ? (
                <button className="btn-primary" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </button>
              ) : (
                <div className="edit-actions">
                  <button className="btn-primary" onClick={handleSaveProfile}>
                    Save Changes
                  </button>
                  <button className="btn-secondary" onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Edit Profile Form */}
      {isEditing && (
        <section className="edit-profile-section">
          <div className="glass-panel edit-form">
            <h2>Edit Profile Information</h2>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={editData.username}
                onChange={(e) => setEditData({...editData, username: e.target.value})}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={editData.email}
                onChange={(e) => setEditData({...editData, email: e.target.value})}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                value={editData.age}
                onChange={(e) => setEditData({...editData, age: parseInt(e.target.value)})}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Activity Status</label>
              <select
                value={editData.activityStatus}
                onChange={(e) => setEditData({...editData, activityStatus: e.target.value})}
                className="form-input"
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="away">Away</option>
              </select>
            </div>
          </div>
        </section>
      )}

      {/* Account Settings */}
      <section className="account-settings-section">
        <div className="glass-panel settings-panel">
          <h2>Account Settings</h2>

          <div className="settings-grid">
            <div className="setting-item">
              <button
                className="setting-btn"
                onClick={() => setShowPasswordChange(!showPasswordChange)}
              >
                🔒 Change Password
              </button>
            </div>

            <div className="setting-item">
              <button
                className="setting-btn"
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              >
                🌍 Change Language
              </button>
            </div>

            <div className="setting-item">
              <button className="setting-btn" onClick={handleSwitchAccount}>
                🔄 Switch Account
              </button>
            </div>

            <div className="setting-item">
              <Link to="/" className="setting-btn">
                🏠 Exit to Homepage
              </Link>
            </div>

            <div className="setting-item">
              <button className="setting-btn logout-btn" onClick={handleLogout}>
                🚪 Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Password Change Form */}
      {showPasswordChange && (
        <section className="password-change-section">
          <div className="glass-panel password-form">
            <h3>Change Password</h3>
            <div className="form-group">
              <label>Current Password</label>
              <input type="password" className="form-input" placeholder="Enter current password" />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input type="password" className="form-input" placeholder="Enter new password" />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input type="password" className="form-input" placeholder="Confirm new password" />
            </div>
            <div className="form-actions">
              <button className="btn-primary">Update Password</button>
              <button className="btn-secondary" onClick={() => setShowPasswordChange(false)}>
                Cancel
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Language Selection */}
      {showLanguageMenu && (
        <section className="language-selection-section">
          <div className="glass-panel language-menu">
            <h3>Select Language</h3>
            <div className="language-grid">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  <span className="language-flag">{lang.flag}</span>
                  <span className="language-name">{lang.name}</span>
                </button>
              ))}
            </div>
            <button
              className="btn-secondary close-menu"
              onClick={() => setShowLanguageMenu(false)}
            >
              Close
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
