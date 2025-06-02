import React from 'react';
import { NavLink } from "react-router";
import { CartIcon } from './cart-indicator.styled'
import { Badge } from '@components/atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

export const CartIndicator : React.FC = () => {
  return (
    <CartIcon>
      <NavLink to="/">
        <FontAwesomeIcon icon={faBagShopping} />
        <Badge>0</Badge>
      </NavLink>
    </CartIcon>
  );
}

export default CartIndicator;