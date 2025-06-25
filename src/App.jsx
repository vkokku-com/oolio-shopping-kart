import React, { useState, useEffect } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import OrderConfirmation from './components/OrderConfirmation'
import { fetchProducts, placeOrder } from './services/api'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [placingOrder, setPlacingOrder] = useState(false)
  const [error, setError] = useState(null)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderDetails, setOrderDetails] = useState(null)

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchProducts()
      setProducts(data)
    } catch (err) {
      setError('Failed to load products. Please try again later.')
      console.error('Error loading products:', err)
    } finally {
      setLoading(false)
    }
  }

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const handlePlaceOrder = async (discountCode) => {
    try {
      setPlacingOrder(true)
      setError(null)
      const orderData = {
        items: cart.map(item => ({
          productId: item.id,
          quantity: item.quantity
        })),
        discountCode,
      }
      
      const result = await placeOrder(orderData)
      
      // Enrich the order result with full product details from the cart
      const detailedOrderItems = result.items.map(item => {
        const productDetails = cart.find(p => p.id === item.productId);
        return {
          ...item,
          ...productDetails,
          quantity: item.quantity,
        };
      });

      const enrichedOrder = { 
        ...result, 
        items: detailedOrderItems,
        subtotal: result.subtotal,
        total: result.total,
        discount: result.discount
      };
      setOrderDetails(enrichedOrder);
      setOrderPlaced(true)
      clearCart()
    } catch (err) {
      setError('Failed to place order. Please try again.')
      console.error('Error placing order:', err)
    } finally {
      setPlacingOrder(false)
    }
  }
  
  const handleStartNewOrder = () => {
    setOrderPlaced(false)
    setOrderDetails(null)
    // Optional: reload products or reset state
    loadProducts()
  }

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <div className="app">
      <main className="main-content container">
        <ProductList 
          products={products}
          cart={cart}
          onAddToCart={addToCart}
          onUpdateQuantity={updateQuantity}
          loading={loading && products.length === 0}
          error={error}
        />
        <Cart
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          onPlaceOrder={handlePlaceOrder}
          isPlacingOrder={placingOrder}
        />
      </main>

      {orderPlaced && (
        <OrderConfirmation 
          order={orderDetails} 
          onStartNewOrder={handleStartNewOrder}
        />
      )}
    </div>
  )
}

export default App 