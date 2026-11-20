import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.js';

export default function CartItem({ onContinueShopping }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  const increment = item => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  const decrement = item => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  const checkout = () => window.alert('Checkout is coming soon! Thank you for visiting Paradise Nursery.');

  return (
    <main className="cart-container">
      <div className="cart-title-row">
        <div><p className="eyebrow">YOUR SELECTION</p><h1>Shopping Cart</h1></div>
        <span className="cart-count-pill">{count} plants</span>
      </div>
      <div className="cart-summary">
        <div><span>Total plants</span><strong>{count}</strong></div>
        <div><span>Total amount</span><strong>${total.toFixed(2)}</strong></div>
      </div>
      {items.length === 0 ? (
        <div className="empty-cart"><span>🪴</span><h2>Your cart is empty</h2><p>Find a plant to brighten your space.</p></div>
      ) : (
        <div className="cart-items">
          {items.map(item => (
            <article className="cart-item-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Unit price: ${item.cost.toFixed(2)}</p>
                <strong>Subtotal: ${(item.cost * item.quantity).toFixed(2)}</strong>
              </div>
              <div className="quantity-controls">
                <button aria-label={`Decrease ${item.name}`} onClick={() => decrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button aria-label={`Increase ${item.name}`} onClick={() => increment(item)}>+</button>
                <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </div>
            </article>
          ))}
        </div>
      )}
      <div className="cart-action-buttons">
        <button className="secondary-btn" onClick={onContinueShopping}>Continue Shopping</button>
        <button className="primary-btn" onClick={checkout} disabled={items.length === 0}>Checkout</button>
      </div>
    </main>
  );
}