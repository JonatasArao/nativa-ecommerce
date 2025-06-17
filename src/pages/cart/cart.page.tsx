import React from 'react';
import { BodyText, Container, PreviousPrice, SalePrice, TitleText } from '@components/atoms';
import { useCart } from '@contexts/cart.context';
import { formatCurrency } from '@utils';
import { Helmet } from 'react-helmet-async';
import { QuantitySelector } from '@components/molecules';

const CartPage: React.FC = () => {
  const { 
    cartItems,
    cartItemCount,
    clearCart
  } = useCart();
  return (
    <>
      <Helmet>
    <title>Minha Sacola - Nativa Brasil</title>
      <meta name="description" content="Revise os itens na sua sacola de compras da Nativa Brasil." />
      <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Container as="section">
        <TitleText as="h1">minha sacola: {cartItemCount} items</TitleText>
        {cartItems.map(item => {
          const currentPrice = item.product.onSale ?
                                item.product.promotionalPrice :
                                item.product.price;
          return (
            <div key={item.product.id}>
              <BodyText>{item.product.name}</BodyText>
              <QuantitySelector cartItem={item} />
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
    </>
  );
};

export default CartPage;