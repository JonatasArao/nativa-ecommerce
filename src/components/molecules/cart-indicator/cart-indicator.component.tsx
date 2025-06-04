import React from 'react';
import { NavLink } from "react-router";
import { CartIcon } from './cart-indicator.styled'
import { Badge } from '@components/atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@contexts/cart.context';

export const CartIndicator : React.FC = () => {
  const { cartItemCount } = useCart();
  const cartLabel = cartItemCount > 0
    ? `Minha sacola, ${cartItemCount} itens`
    : "Minha sacola, nenhum item";
  
  return (
    <CartIcon>
      <NavLink to="/cart" aria-label={cartLabel}>
        <FontAwesomeIcon icon={faBagShopping} aria-hidden="true" />
        {cartItemCount > 0 && <Badge aria-hidden="true">{cartItemCount}</Badge>}
      </NavLink>
    </CartIcon>
  );
}

export default CartIndicator;