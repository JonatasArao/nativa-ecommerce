import { useCart } from "@contexts/cart.context";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartItem } from "@models";
import React from "react";
import { SelectorWrapper } from "./quantity-selector.styled";

interface QuantitySelectorProps {
  cartItem : CartItem;
}

export const QuantitySelector : React.FC<QuantitySelectorProps> = ({ cartItem }) => {
  const { updateItemQuantity } = useCart();
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      updateItemQuantity(cartItem.product.id, newQuantity);
    }
  };
  return (
    <SelectorWrapper>
      <button type="button" title="Remover" onClick={() => updateItemQuantity(cartItem.product.id, cartItem.quantity - 1)}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input type="number" value={cartItem.quantity} onChange={inputChange}/>
      <button type="button" title="Adicionar" onClick={() => updateItemQuantity(cartItem.product.id, cartItem.quantity + 1)}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </SelectorWrapper>
  );
}

export default QuantitySelector;