import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

export default function Home() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="content">
        <h1>
          Welcome To the official Bookstore of Microverse
        </h1>
      </div>
    </div>
  );
}
