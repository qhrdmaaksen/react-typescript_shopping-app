import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";

function App() {
  const items = [
    {
      id: 1,
      product: '레몬',
      quantity: 3,
    },
    {
      id: 2,
      product: '닭 가슴살',
      quantity: 2,
    }
  ];
  return (
    <div className="App">
      <Greeter person="min woo" />
      <ShoppingList items={items}/>
    </div>
  );
}

export default App;
