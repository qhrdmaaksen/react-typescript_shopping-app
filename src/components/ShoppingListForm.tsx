import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}
const ShoppingListForm = ({
  onAddItem,
}: ShoppingListFormProps): JSX.Element => {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit form 호출 됨");
    const newProduct = productInputRef.current!.value;
    // 수량은 숫자로 입력받기 때문에, 문자열을 숫자로 변환
    const newQuantity = parseInt(quantityInputRef.current!.value);
    // 유효성 검사 추가 (상품명과 수량이 입력되지 않았을 때, 수량이 숫자가 아닐 때)
    if (newProduct.trim().length === 0 || newQuantity <= 0) {
      return alert("상품명과 수량을 입력해주세요.");
    } else if (isNaN(newQuantity)) {
      return alert("수량은 숫자만 입력해주세요");
    } else {
      onAddItem(newProduct, newQuantity);
      productInputRef.current!.value = "";
      quantityInputRef.current!.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={productInputRef} placeholder="상품명" />
      <input type="number" min={0} ref={quantityInputRef} />
      <button type="submit">추가</button>
    </form>
  );
};

export default ShoppingListForm;
