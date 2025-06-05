import React from "react";
import { Button } from '@components/atoms'
import { useCart } from '@contexts/cart.context';
import { Product } from "@models";

interface CartButtonProps {
  product : Product;
}

export const CartButton : React.FC<CartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();
  const buttonLabel = `adicionar ${product.name} à sacola`;
  const addCart = () => {
    addToCart(product);
  };
  return (
    <Button onClick={addCart} aria-label={buttonLabel}>adicionar à sacola</Button>
  )
}

export default CartButton;