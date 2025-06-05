import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { HelmetProvider } from 'react-helmet-async';
import { AppLayout } from '@components/templates'
import { HomePage, NotFoundPage, SearchPage } from '@pages';
import './globals.tsx';
import CartPage from '@pages/cart/cart.page.tsx';

let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "/search",
          element: <SearchPage />
        },
        {
          path: "/cart",
          element: <CartPage />
        },
        {
          path: "*",
          element: <NotFoundPage />
        }
      ]
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
);

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </React.StrictMode>,
  );
}
