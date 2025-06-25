const API_BASE_URL = '/api'

const fallbackProducts = [
  {
    "id": "1",
    "name": "Waffle with Berries",
    "price": 6.50,
    "category": "Waffle",
    "image": {
      "thumbnail": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-waffle-thumbnail.jpg",
      "mobile": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-waffle-mobile.jpg",
      "tablet": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-waffle-tablet.jpg",
      "desktop": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-waffle-desktop.jpg"
    }
  },
  {
    "id": "2",
    "name": "Vanilla Bean Crème Brûlée",
    "price": 7.00,
    "category": "Crème Brûlée",
    "image": {
      "thumbnail": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-creme-brulee-thumbnail.jpg",
      "mobile": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-creme-brulee-mobile.jpg",
      "tablet": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-creme-brulee-tablet.jpg",
      "desktop": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-creme-brulee-desktop.jpg"
    }
  },
  {
    "id": "3",
    "name": "Macaron Mix of Five",
    "price": 8.00,
    "category": "Macaron",
    "image": {
      "thumbnail": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-macaron-thumbnail.jpg",
      "mobile": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-macaron-mobile.jpg",
      "tablet": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-macaron-tablet.jpg",
      "desktop": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-macaron-desktop.jpg"
    }
  },
  {
    "id": "4",
    "name": "Classic Tiramisu",
    "price": 5.50,
    "category": "Tiramisu",
    "image": {
      "thumbnail": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-tiramisu-thumbnail.jpg",
      "mobile": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-tiramisu-mobile.jpg",
      "tablet": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-tiramisu-tablet.jpg",
      "desktop": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-tiramisu-desktop.jpg"
    }
  },
  {
    "id": "5",
    "name": "Pistachio Baklava",
    "price": 4.00,
    "category": "Baklava",
    "image": {
      "thumbnail": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-baklava-thumbnail.jpg",
      "mobile": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-baklava-mobile.jpg",
      "tablet": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-baklava-tablet.jpg",
      "desktop": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-baklava-desktop.jpg"
    }
  },
  {
    "id": "6",
    "name": "Lemon Meringue Pie",
    "price": 5.00,
    "category": "Pie",
    "image": {
      "thumbnail": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-meringue-thumbnail.jpg",
      "mobile": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-meringue-mobile.jpg",
      "tablet": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-meringue-tablet.jpg",
      "desktop": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-meringue-desktop.jpg"
    }
  },
  {
    "id": "7",
    "name": "Red Velvet Cake",
    "price": 4.50,
    "category": "Cake",
    "image": {
      "thumbnail": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-cake-thumbnail.jpg",
      "mobile": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-cake-mobile.jpg",
      "tablet": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-cake-tablet.jpg",
      "desktop": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-cake-desktop.jpg"
    }
  },
  {
    "id": "8",
    "name": "Salted Caramel Brownie",
    "price": 5.50,
    "category": "Brownie",
    "image": {
      "thumbnail": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-brownie-thumbnail.jpg",
      "mobile": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-brownie-mobile.jpg",
      "tablet": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-brownie-tablet.jpg",
      "desktop": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-brownie-desktop.jpg"
    }
  },
  {
    "id": "9",
    "name": "Vanilla Panna Cotta",
    "price": 6.50,
    "category": "Panna Cotta",
    "image": {
      "thumbnail": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-panna-cotta-thumbnail.jpg",
      "mobile": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-panna-cotta-mobile.jpg",
      "tablet": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-panna-cotta-tablet.jpg",
      "desktop": "https://raw.githubusercontent.com/aj-4-2/kart-challenge/main/src/assets/images/image-panna-cotta-desktop.jpg"
    }
  }
]

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/product`, {
      headers: {
        'Accept': '*/*'
      }
    })
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.warn('API error, using fallback data:', error)
    return fallbackProducts
  }
}

export const placeOrder = async (orderData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify({
        couponCode: orderData.discountCode || "",
        items: orderData.items.map(item => ({
          productId: item.productId,
          quantity: item.quantity
        }))
      }),
    })
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.warn('API error, simulating successful order:', error)
    
    const calculateDiscount = (code, total, items) => {
      const upperCode = (code || '').toUpperCase();
      if (upperCode === 'HAPPYHOURS') {
        return { type: 'percentage', value: 0.18, amount: total * 0.18 };
      }
      if (upperCode === 'BUYGETONE' && items.length > 0) {
        const lowestPriceItem = items.reduce((lowest, item) => 
          item.price < lowest.price ? item : lowest
        );
        return { type: 'free_item', value: lowestPriceItem.price, amount: lowestPriceItem.price };
      }
      return { amount: 0 };
    };

    const orderItems = orderData.items.map(item => {
      const productDetails = fallbackProducts.find(p => p.id === item.productId)
      return { ...productDetails, quantity: item.quantity }
    })
    const subtotal = orderItems.reduce((sum, item) => sum + (item.quantity * item.price), 0)
    const discountResult = calculateDiscount(orderData.discountCode, subtotal, orderItems);

    return {
      orderId: `DEMO-${Date.now()}`,
      items: orderItems,
      subtotal: subtotal,
      discount: discountResult.amount,
      total: subtotal - discountResult.amount
    }
  }
} 