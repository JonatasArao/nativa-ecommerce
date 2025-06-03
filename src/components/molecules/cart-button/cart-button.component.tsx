import React from "react";
import { Button } from '@components/atoms'
import { useCart } from '@contexts/cart.context';

interface CartButtonProps {
  productId : string;
}

export const CartButton : React.FC<CartButtonProps> = ({ productId }) => {const { addToCart } = useCart(); // Use o hook para pegar a função

  const addCart = () => {
    addToCart();
    console.log(`Produto Adicionado: ${productId}`)
  };
  return (
    <Button onClick={addCart}>adicionar à sacola</Button>
  )
}

export default CartButton;