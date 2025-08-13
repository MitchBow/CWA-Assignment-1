'use client';

import './globals.css';
import React, { useState, useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      const isDark = savedMode === 'true';
      setDarkMode(isDark);
      document.body.className = isDark ? 'dark' : 'light';
    } else {
      document.body.className = 'light';
    }
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <html lang="en">
      <body>
        {/* Top Header */}
        <header
          style={{
            padding: '1rem',
            background: 'var(--header-footer-background)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div>Mitchell Bowell — Student No: 21610317</div>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
            }}
          >
            <h1 id="title" style={{ margin: 0 }}>
              This is the Title
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                userSelect: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <div className={`burger ${menuOpen ? 'open' : ''}`}>
                <span />
                <span />
                <span />
              </div>
            </button>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
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

          {/* Burger menu dropdown/sidebar */}
          {menuOpen && (
            <nav
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                background: 'var(--nav-background)',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '200px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                zIndex: 1000,
              }}
            >
              <ul style={{ listStyle: 'none', margin: 0, padding: '0.5rem 0' }}>
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/escape-room', label: 'Escape Room' },
                  { href: '/coding-races', label: 'Coding Races' },
                  { href: '/court-room', label: 'Court Room' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={handleLinkClick}
                      style={{
                        display: 'block',
                        padding: '0.5rem 1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        cursor: 'pointer',
                      }}
                      onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </header>

        {/* Main content */}
        <main style={{ padding: '2rem', clear: 'both' }}>{children}</main>

        {/* Footer */}
        <footer
          style={{
            background: 'var(--header-footer-background)',
            padding: '1rem',
            marginTop: '2rem',
          }}
        >
          {new Date().getFullYear()} Mitchell Bowell — Student No: 21610317
        </footer>

        <style>{`
          .burger {
            width: 24px;
            height: 18px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .burger span {
            display: block;
            height: 3px;
            background: currentColor;
            border-radius: 2px;
            transition: all 0.3s ease;
          }
          .burger.open span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }
          .burger.open span:nth-child(2) {
            opacity: 0;
          }
          .burger.open span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
          }
        `}</style>
      </body>
    </html>
  );
}
