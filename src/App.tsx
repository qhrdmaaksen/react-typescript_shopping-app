import React, { useState } from "react";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import ShoppingListForm from "./components/ShoppingListForm";
import { v4 as getId } from "uuid";

/* items dummy data
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
  ];*/
function App() {
  const [items, setItems] = useState<Item[]>([]);
  const AddItem = (product: string, quantity: number) => {
    console.log("AddItem 호출 됨");
    setItems([...items, { id: getId(), product, quantity}]);
  };
  return (
    <div className="App">
      <Greeter person="min woo" />
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={AddItem} />
    </div>
  );
}

export default App;
