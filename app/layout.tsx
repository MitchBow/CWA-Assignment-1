// app/layout.tsx
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'CSE3CWA Assignment',
  description: 'Next.js Web App for LTU LMS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', background: '#eee' }}>
          <div style={{ float: 'left' }}>Mitchell Bowell — Student No: 21610317</div>
          <div style={{ float: 'right' }}>Assignment 1</div>
        </header>

        <header style={{ padding: '1rem', background: '#eee' }}>
          <div style={{ float: 'left', padding: '1rem' }}>example</div>
          <nav style={{ padding: '1rem', background: '#ddd', textAlign: 'center'}}>
          <a href="/" style={{ margin: '0 10px' }}>Home</a>
          <a href="/about" style={{ margin: '0 10px' }}>About</a>
          <a href="/tabs" style={{ margin: '0 10px' }}>Tabs</a>
          <a href="/Hamburger Menu" style={{ margin: '0 10px' }}>Hamburger Menu</a>
          <a href="/escape-room" style={{ margin: '0 10px' }}>Escape Room</a>
          <a href="/coding-races" style={{ margin: '0 10px' }}>Coding Races</a>
          <a href="/court-room" style={{ margin: '0 10px' }}>Court Room</a>
        </nav>
        </header>


        <main style={{ padding: '2rem', clear: 'both' }}>{children}</main>

        <footer style={{ background: '#eee', padding: '1rem', marginTop: '2rem' }}>
          &copy; {new Date().getFullYear()} Mitchell Bowell — Student No: 21610317
        </footer>
      </body>
    </html>
  );
}
