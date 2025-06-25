import React from 'react'
import './OrderConfirmation.css'

const OrderConfirmation = ({ order, onStartNewOrder }) => {
  if (!order) {
    // Basic fallback if order details are not available for some reason
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="confirmation-header">
            <div className="confirmation-icon error">
              {/* Error Icon */}
            </div>
            <h2 className="confirmation-title">Order Failed</h2>
          </div>
          <p className="confirmation-subtitle">We couldn't process your order. Please try again.</p>
          <button className="start-new-order-button" onClick={onStartNewOrder}>
            Try Again
          </button>
        </div>
      </div>
    )
  }

  const { items, subtotal, total, discount } = order;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="confirmation-header">
          <div className="confirmation-icon success">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6923 8.30767L10.3846 14.6154L7.30769 11.5384" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="confirmation-title">Order Confirmed</h2>
          <p className="confirmation-subtitle">We hope you enjoy your food!</p>
        </div>

        <div className="order-summary">
          <div className="order-items-summary">
            {items?.map((item, index) => (
              <div key={index} className="summary-item">
                <div className="summary-item-image">
                  <img src={item.image?.thumbnail} alt={item.name} />
                </div>
                <div className="summary-item-details">
                  <p className="summary-item-name">{item.name}</p>
                  <p className="summary-item-quantity">{item.quantity}x @ ${item.price.toFixed(2)}</p>
                </div>
                <p className="summary-item-total">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="summary-total-section">
            <div className="summary-total-line">
              <span className="summary-total-label">Subtotal</span>
              <span className="summary-total-value">${(subtotal || 0).toFixed(2)}</span>
            </div>
            {(discount || 0) > 0 && (
              <div className="summary-total-line">
                <span className="summary-total-label discount-label">Discount</span>
                <span className="summary-total-value discount-value">-${(discount || 0).toFixed(2)}</span>
              </div>
            )}
            <div className="summary-total-line final-total-line">
              <span className="summary-total-label">Total</span>
              <span className="summary-total-value">${(total || 0).toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <button className="start-new-order-button" onClick={onStartNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default OrderConfirmation 