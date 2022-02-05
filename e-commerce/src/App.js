import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components/';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [ products, setProduct ] = useState([]);
  const [ cart, setCart ] = useState({ line_items: [] });

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProduct(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(cart);
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route exact path="/cart" element={<Cart card={cart} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
