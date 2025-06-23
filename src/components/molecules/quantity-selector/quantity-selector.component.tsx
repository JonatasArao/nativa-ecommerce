import React, { useState, useEffect } from "react";
import { useCart } from "@contexts/cart.context";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartItem } from "@models";
import { SelectorWrapper } from "./quantity-selector.styled";

interface QuantitySelectorProps {
  cartItem: CartItem;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({ cartItem }) => {
  const { updateItemQuantity, removeFromCart, maxQuantity } = useCart();
  const { product, quantity } = cartItem;

  const [inputValue, setInputValue] = useState(quantity.toString());

  useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setInputValue("");
      return;
    }

    const newQuantity = parseInt(value, 10);

    if (newQuantity <= maxQuantity) {
      setInputValue(newQuantity.toString());
    }
  };

  const handleInputBlur = () => {
    const newQuantity = parseInt(inputValue, 10)
    if (inputValue === "" || newQuantity === 0) {
      removeFromCart(product.id);
      return;
    }
    
    if (newQuantity !== quantity) {
      updateItemQuantity(product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    if (quantity > 1) {
      updateItemQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };
  
  return (
    <SelectorWrapper>
      <button type="button" title="Remover" onClick={handleRemove}>
        <FontAwesomeIcon icon={faMinus} />
      </button>

      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        aria-label={`Quantidade para ${product.name}`}
      />

      <button
        type="button"
        title="Adicionar"
        onClick={() => updateItemQuantity(product.id, quantity + 1)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </SelectorWrapper>
  );
};

export default QuantitySelector;