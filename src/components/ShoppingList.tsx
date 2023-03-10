import React from "react";

interface Item {
  id: number;
  product: string;
  quantity: number;
}
interface ShoppingListProps {
  // items 는 Item[] 타입의 배열 (배열의 각 요소는 Item 타입) 이라고 정의
  items: Item[];
}
export default function ShoppingList({items}: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
