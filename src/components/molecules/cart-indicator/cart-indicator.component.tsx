import React from 'react';
import { NavLink } from "react-router";
import { CartIcon } from './cart-indicator.styled'
import { Badge } from '@components/atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@contexts/cart.context';

export const CartIndicator : React.FC = () => {
  const { cartItemCount } = useCart();
  return (
    <CartIcon>
      <NavLink to="/">
        <FontAwesomeIcon icon={faBagShopping} />
        {cartItemCount > 0 && <Badge>{cartItemCount}</Badge>}
      </NavLink>
    </CartIcon>
  );
}

export default CartIndicator;