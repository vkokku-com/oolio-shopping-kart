import React from 'react'
import ProductCard from './ProductCard'
import './ProductList.css'

const ProductList = ({ products, cart, onAddToCart, onUpdateQuantity, loading, error }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading desserts...</p>
      </div>
    )
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }

  return (
    <div className="product-list-container">
      <h1 className="page-title">Desserts</h1>
      <div className="product-grid">
        {products.map(product => {
          const cartItem = cart.find(item => item.id === product.id)
          return (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onUpdateQuantity={onUpdateQuantity}
              quantityInCart={cartItem ? cartItem.quantity : 0}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductList 