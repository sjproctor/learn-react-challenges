import React, { useState } from 'react';
import MenuItems from './components/MenuItems';
import Cart from './components/Cart';
import './App.css';

const App = () => {

  const items = [
    {name: "Spring Rolls", price: "3.25"},
    {name: "Pad Thai", price: "9.00"},
    {name: "Yellow Curry", price: "12.00"},
    {name: "Gyoza", price: "6.50"},
    {name: "Tom Kha", price: "10.50"}
  ]

  const [cart, setCart] = useState([])
  
  const addItemToCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <>
      <h1>Food Ordering App</h1>
      <main>
        <MenuItems items={items} addItemToCart={addItemToCart} />
        <Cart cart={cart} />
      </main>
    </>
  );
}

export default App;
