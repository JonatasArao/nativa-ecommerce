import React from 'react';
import { BodyText, Container, DetailText, PreviousPrice, SalePrice, TitleText } from '@components/atoms';
import { useCart } from '@contexts/cart.context';
import { formatCurrency } from '@utils';

const CartPage: React.FC = () => {
  const { 
    cartItems,
    cartItemCount,
    updateItemQuantity,
    clearCart
  } = useCart();
  return (
    <Container as="section">
      <TitleText as="h1">minha sacola: {cartItemCount} items</TitleText>
      {cartItems.map(item => {
        const currentPrice = item.product.onSale ?
                              item.product.promotionalPrice :
                              item.product.price;
        return (
          <div>
            <BodyText>{item.product.name}</BodyText>
            <button onClick={() => updateItemQuantity(item.product.id, item.quantity - 1)}>Remover</button>
            <DetailText>{item.quantity}</DetailText>
            <button onClick={() => updateItemQuantity(item.product.id, item.quantity + 1)}>Adicionar</button>
            <div>
              {item.product.onSale && (
              <PreviousPrice>
                {formatCurrency(item.product.price, item.product.currency)}
                </PreviousPrice>
              )}
              <SalePrice>
                {formatCurrency(currentPrice, item.product.currency)}
              </SalePrice>
            </div>
          </div>
        );
      })}
      {cartItems.length > 0 && (
        <button onClick={clearCart}>Limpar</button>
      )}
    </Container>
  );
};

export default CartPage;