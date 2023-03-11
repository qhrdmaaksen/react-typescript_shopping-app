import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string) => void;
}
const ShoppingListForm = ({
  onAddItem,
}: ShoppingListFormProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit form 호출 됨");
    const newProduct = inputRef.current?.value;
    if (newProduct) {
      onAddItem(newProduct);
      inputRef.current!.value = "";
    } else {
      alert("상품명을 입력해주세요");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="상품명" />
      <button type="submit">추가</button>
    </form>
  );
};

export default ShoppingListForm;
