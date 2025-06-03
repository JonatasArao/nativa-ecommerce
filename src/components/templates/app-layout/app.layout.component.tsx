import React from 'react';
import { Outlet } from 'react-router';
import { Header, Footer } from '@components/organisms';
import { CartProvider } from '@contexts/cart.context';
import { LayoutRoot, MainContent } from './app.layout.styled';

const AppLayout: React.FC = () => {
  return (
    <LayoutRoot>
      <CartProvider>
        <Header />
        <MainContent> 
          <Outlet />
        </MainContent>
      </CartProvider>
      <Footer />
    </LayoutRoot>
  );
};

export default AppLayout;