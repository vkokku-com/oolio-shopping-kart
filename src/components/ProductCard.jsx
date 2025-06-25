import React from 'react'
import './ProductCard.css'

const ProductCard = ({ product, onAddToCart, onUpdateQuantity, quantityInCart }) => {
  const placeholderImage = `https://source.unsplash.com/random/300x300/?${product.category},dessert`;
  const image = product.image;

  return (
    <div className="product-card">
      <div className="product-image-container">
        {image && typeof image === 'object' ? (
          <picture>
            <source media="(max-width: 767px)" srcSet={image.mobile} />
            <source media="(max-width: 1023px)" srcSet={image.tablet} />
            <img 
              src={image.desktop}
              alt={product.name}
              className="product-image"
              loading="lazy"
            />
          </picture>
        ) : (
          <img 
            src={placeholderImage} 
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        )}
        {quantityInCart > 0 ? (
          <div className="quantity-controls">
            <button 
              className="quantity-button"
              onClick={() => onUpdateQuantity(product.id, quantityInCart - 1)}
              aria-label="Decrease quantity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c94822" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <span className="quantity-display">{quantityInCart}</span>
            <button
              className="quantity-button"
              onClick={() => onUpdateQuantity(product.id, quantityInCart + 1)}
              aria-label="Increase quantity"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c94822" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        ) : (
          <button 
            className="add-to-cart-button"
            onClick={() => onAddToCart(product)}
          >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c94822" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>Add to Cart</span>
          </button>
        )}
      </div>
      
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard 