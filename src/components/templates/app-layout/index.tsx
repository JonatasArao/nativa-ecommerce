import React from 'react';
import { Outlet } from 'react-router';
import { Header, Footer } from '@components/organisms';
import { styled } from '@linaria/react';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
`

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