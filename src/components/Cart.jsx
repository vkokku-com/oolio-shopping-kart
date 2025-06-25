import React, { useState, useEffect, useCallback } from 'react'
import './Cart.css'
import emptyCartImage from '../assets/empty-cart.svg'

const Cart = ({ 
  cart, 
  onUpdateQuantity, 
  onRemoveItem, 
  onPlaceOrder, 
  isPlacingOrder
}) => {
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(null);

  const handleRemoveDiscount = useCallback(() => {
    setDiscountCode('');
    setAppliedDiscount(null);
  }, []);

  useEffect(() => {
    if (cart.length === 0 && appliedDiscount) {
      handleRemoveDiscount();
    }
  }, [cart.length, appliedDiscount, handleRemoveDiscount]);

  const calculateDiscount = (code, total, items) => {
    const upperCode = code.toUpperCase();
    if (upperCode === 'HAPPYHOURS') {
      return { type: 'percentage', value: 0.18, amount: total * 0.18 };
    }
    if (upperCode === 'BUYGETONE' && items.length > 0) {
      const lowestPriceItem = items.reduce((lowest, item) => 
        item.price < lowest.price ? item : lowest
      );
      return { type: 'free_item', value: lowestPriceItem.price, amount: lowestPriceItem.price };
    }
    return null;
  };

  const handleApplyDiscount = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = calculateDiscount(discountCode, subtotal, cart);
    setAppliedDiscount(discount);
  };
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = appliedDiscount ? appliedDiscount.amount : 0;
  const finalTotal = subtotal - discountAmount;
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <aside className="cart-container">
      <h2 className="cart-title">Your Cart ({cartItemCount})</h2>
      <div className="cart-content-wrapper">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <img src={emptyCartImage} alt="Empty Cart" className="empty-cart-image" />
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price"><span className="cart-item-quantity">{item.quantity}x</span><span className="cart-item-price">@ ${item.price.toFixed(2)}</span></p>
                  </div>
                  <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    className="remove-item-button"
                    onClick={() => onRemoveItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="discount-section">
                <input
                  type="text"
                  className="discount-input"
                  placeholder="Discount code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  disabled={!!appliedDiscount}
                />
                {appliedDiscount ? (
                  <button className="apply-discount-button" onClick={handleRemoveDiscount}>Remove</button>
                ) : (
                  <button className="apply-discount-button" onClick={handleApplyDiscount}>Apply</button>
                )}
              </div>
              
              <div className="order-total-line">
                <span className="order-total-label">Subtotal</span>
                <span className="order-total-value">${subtotal.toFixed(2)}</span>
              </div>

              {appliedDiscount && (
                 <div className="order-total-line">
                  <span className="order-total-label discount-label">Discount</span>
                  <span className="order-total-value discount-value">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              
              <div className="order-total-line final-total-line">
                <span className="order-total-label">Order Total</span>
                <span className="order-total-value">${finalTotal.toFixed(2)}</span>
              </div>

              <div className="carbon-neutral">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                </svg>
                This is a carbon-neutral delivery
              </div>
              <button 
                className="confirm-order-button"
                onClick={() => onPlaceOrder(discountCode)}
                disabled={isPlacingOrder || cart.length === 0}
              >
                {isPlacingOrder ? 'Placing Order...' : 'Confirm Order'}
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default Cart;