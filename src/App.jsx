import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages.jsx/Home'
import Login from './Component/Login'
import Register from './Component/Register'
import ProductDetail from './Component/ProductDetail'
import Mens from './Pages.jsx/Mens'
import Formalshirts from './Pages.jsx/Formalshirts'
import Informalshirts from './Pages.jsx/Informalshirts'
import Poloshirts from './Pages.jsx/Poloshirts'
import Dresspants from './Pages.jsx/Dresspants'
import Jeanspants from './Pages.jsx/Jeanspants'
import Normalshorts from './Pages.jsx/Normalshorts'
import Threefourshorts from './Pages.jsx/Threefourshorts'
import Formaljackets from './Pages.jsx/Formaljackets'
import Denimjackets from './Pages.jsx/Denimjackets'
import Contact from './Pages.jsx/Contact'
import Collections from './Pages.jsx/Collections'
import About from './Pages.jsx/About'
import Blog from './Pages.jsx/Blog'
import CartPage from './Component/CartPage'
import WishlistPage from './Component/WishlistPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/formal-shirts" element={<Formalshirts />} />
        <Route path="/informal-shirts" element={<Informalshirts />} />
        <Route path="/polo-shirts" element={<Poloshirts />} />
        <Route path="/dress-pants" element={<Dresspants />} />
        <Route path="/jeans-pants" element={<Jeanspants />} />
        <Route path="/normal-shorts" element={<Normalshorts />} />
        <Route path="/three-four-shorts" element={<Threefourshorts />} />
        <Route path="/formal-jackets" element={<Formaljackets />} />
        <Route path="/denim-jackets" element={<Denimjackets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
<Route path="/blog" element={<Blog />} />
        







        
      </Routes>
    </Router>
  )
}

export default App
