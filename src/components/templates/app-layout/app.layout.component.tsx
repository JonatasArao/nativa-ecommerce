import React from 'react';
import { Outlet } from 'react-router';
import { Header, Footer } from '@components/organisms';
import { Container } from './app.layout.styles';

const AppLayout: React.FC = () => {
  return (
    <Container>
      <Header />
      <main> 
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default AppLayout;