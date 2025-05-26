import React from 'react';
import { Outlet } from 'react-router';
import { Header, Footer } from '..';

const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main> 
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;