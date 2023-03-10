import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from "./components/Greeter";

function App() {
  return (
    <div className="App">
      <Greeter person="min woo" />
      <Greeter person="min gee"/>
      <Greeter person="min seok"/>
    </div>
  );
}

export default App;
