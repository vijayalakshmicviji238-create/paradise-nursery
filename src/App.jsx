import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function Landing({ onStart }) {
  return (
    <main className="landing">
      <div className="landing-overlay">
        <div className="hero-content">
          <p className="eyebrow light">WELCOME TO YOUR GREEN SPACE</p>
          <h1>Paradise Nursery</h1>
          <p className="hero-text">
            Bring nature home. Explore beautiful plants that help make every
            corner feel fresh, peaceful and alive.
          </p>
          <button className="primary-btn" onClick={onStart}>Get Started</button>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState('home');
  const items = useSelector(state => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const goProducts = () => setPage('products');
  const goCart = () => setPage('cart');

  return (
    <div className="app-shell">
      {page !== 'home' && (
        <header className="navbar">
          <button className="brand" onClick={() => setPage('home')}>🌿 Paradise Nursery</button>
          <nav>
            <button onClick={() => setPage('home')}>Home</button>
            <button onClick={goProducts}>Plants</button>
            <button className="cart-nav" onClick={goCart}>🛒 Cart <span>{count}</span></button>
          </nav>
        </header>
      )}
      {page === 'home' && <Landing onStart={goProducts} />}
      {page === 'products' && (
        <>
          <div className="catalog-heading">
            <h1>Find your perfect plant</h1>
            <p>Bring a little green into your everyday life.</p>
          </div>
          <ProductList />
          <AboutUs />
        </>
      )}
      {page === 'cart' && <CartItem onContinueShopping={goProducts} />}
      {page === 'home' && <AboutUs />}
      {page === 'home' && (
        <footer className="home-footer">
          <button className="primary-btn" onClick={goProducts}>Browse Plants</button>
        </footer>
      )}
    </div>
  );
}