import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="content">
        <h3>
          Welcome To the official Bookstore of Microverse
        </h3>
      </div>
    </div>
  );
}
