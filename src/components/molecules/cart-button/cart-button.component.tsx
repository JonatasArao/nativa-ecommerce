import React from "react";
import { Button } from '@components/atoms'

interface CartButtonProps {
  productId : string;
}

export const CartButton : React.FC<CartButtonProps> = ({ productId }) => {
  const addCart = () => {
    alert(`Produto Adicionado: ${productId}`)
  };
  return (
    <Button onClick={addCart}>adicionar à sacola</Button>
  )
}

export default CartButton;