import React from 'react';
import { Outlet } from 'react-router';
import { Header, Footer } from '@components/organisms';
import { LayoutRoot, MainContent } from './app.layout.styled';

const AppLayout: React.FC = () => {
  return (
    <LayoutRoot>
      <Header />
      <MainContent> 
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutRoot>
  );
};

export default AppLayout;