'use client';

import './globals.css';
import React, { useState, useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference on initial mount
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      const isDark = savedMode === 'true';
      setDarkMode(isDark);
      document.body.className = isDark ? 'dark' : 'light';
    } else {
      // default to light if nothing is saved
      document.body.className = 'light';
    }
  }, []);

  // Update body class and save to localStorage when darkMode changes
  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <html lang="en">
      <body>
        {/* Top Header */}
        <header style={{ padding: '1rem', background: 'var(--header-footer-background)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>Mitchell Bowell — Student No: 21610317</div>
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', }}>
            <h1 id="title" style={{ margin: 0 }}>This is the Title</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Assignment 1</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: '0.5rem',
                cursor: 'pointer',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </header>

        {/* Tabs Header */}
        <header style={{ background: '#eee' }}>
          <nav style={{ padding: '1rem', background: 'var(--nav-background)', textAlign: 'center' }}>
            <a href="/" style={{ margin: '0 10px' }}>Home</a>
            <a href="/about" style={{ margin: '0 10px' }}>About</a>
            <a href="/escape-room" style={{ margin: '0 10px' }}>Escape Room</a>
            <a href="/coding-races" style={{ margin: '0 10px' }}>Coding Races</a>
            <a href="/court-room" style={{ margin: '0 10px' }}>Court Room</a>
          </nav>
        </header>

        {/* Main content */}
        <main style={{ padding: '2rem', clear: 'both' }}>{children}</main>

        {/* Footer */}
        <footer style={{ background: 'var(--header-footer-background)', padding: '1rem', marginTop: '2rem' }}>
          {new Date().getFullYear()} Mitchell Bowell — Student No: 21610317
        </footer>
      </body>
    </html>
  );
}
