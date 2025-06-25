# 🍕 Food Ordering Web App

A modern, responsive food ordering web application built with React and Vite. This app features a beautiful product listing, functional shopping cart, and seamless order placement with discount code support.

## ✨ Features

### Core Functionality
- **Product Display**: Beautiful grid layout showcasing food items with images, descriptions, and prices
- **Shopping Cart**: Add, remove, and modify item quantities with real-time total calculation
- **Order Placement**: Seamless order confirmation with order details
- **Responsive Design**: Optimized for mobile (375px) and desktop (1440px) with full responsive support

### Bonus Features
- **Discount Codes**: 
  - `HAPPYHOURS`: 18% discount on total order
  - `BUYGETONE`: Free lowest-priced item
- **Interactive UI**: Hover effects, focus states, and smooth animations
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Error Handling**: Graceful error states and loading indicators

### Technical Features
- **Modern React**: Built with React 18 and functional components with hooks
- **Vite Build**: Fast development and optimized production builds
- **API Integration**: Connects to the demo e-commerce API for products and orders
- **TypeScript Ready**: Easy to convert to TypeScript for type safety

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vkokku-com/oolio-shopping-kart.git
   cd oolio-shopping-kart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Design System

### Typography
- **Font Family**: Red Hat Text (Google Fonts)
- **Weights**: 400 (Regular), 600 (Semi-bold), 700 (Bold)
- **Product Names**: 16px font size

### Color Palette
- **Primary**: #007bff (Blue)
- **Success**: #28a745 (Green)
- **Error**: #dc3545 (Red)
- **Background**: #f8f9fa (Light Gray)
- **Text**: #333 (Dark Gray)

### Responsive Breakpoints
- **Mobile**: 375px (design size)
- **Desktop**: 1440px (design size)
- **Full Range**: 320px to large screens (WCAG compliant)

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # App header with cart icon
│   ├── ProductList.jsx # Product grid container
│   ├── ProductCard.jsx # Individual product display
│   ├── Cart.jsx        # Shopping cart modal
│   └── OrderConfirmation.jsx # Order success page
├── services/           # API services
│   └── api.js         # API integration functions
├── App.jsx            # Main application component
├── main.jsx           # React entry point
└── index.css          # Global styles
```

## 🔧 API Integration

The app integrates with the demo e-commerce API:

- **Base URL**: `https://orderfoodonline.deno.dev/api`
- **Endpoints**:
  - `GET /products` - Fetch product catalog
  - `POST /orders` - Place new order

### API Documentation
- [OpenAPI Documentation](https://orderfoodonline.deno.dev/public/openapi.html)
- [OpenAPI Specification](https://orderfoodonline.deno.dev/public/openapi.yaml)

## 🎯 User Experience

### Shopping Flow
1. **Browse Products**: View food items in an attractive grid layout
2. **Add to Cart**: Click "Add to Cart" to add items
3. **Manage Cart**: Open cart to modify quantities or remove items
4. **Apply Discount**: Enter discount codes for savings
5. **Place Order**: Confirm order and view success page

### Interactive Elements
- **Hover Effects**: Cards lift and images scale on hover
- **Focus States**: Clear visual feedback for keyboard navigation
- **Loading States**: Spinners and disabled states during API calls
- **Animations**: Smooth transitions and micro-interactions

## 📱 Responsive Design

The application is fully responsive and tested across:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Key responsive features:
- Flexible grid layouts
- Mobile-optimized cart modal
- Touch-friendly buttons and interactions
- Optimized typography scaling

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS S3**: Upload built files to S3 bucket

### Environment Variables
No environment variables required - the app uses the public demo API.

## 🧪 Testing

The application includes:
- **Error Boundaries**: Graceful error handling
- **Loading States**: User feedback during API calls
- **Input Validation**: Form validation and error messages
- **Accessibility**: Screen reader support and keyboard navigation

## 🔮 Future Enhancements

Potential improvements for a production app:
- **User Authentication**: Login/signup functionality
- **Order History**: View past orders
- **Payment Integration**: Stripe or PayPal integration
- **Real-time Updates**: WebSocket for order status
- **PWA Features**: Offline support and app-like experience
- **Search & Filter**: Product search and category filtering
- **Reviews & Ratings**: Customer feedback system

## 📄 License

This project is created for the Kart Challenge. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ using React, Vite, and modern web technologies** 
