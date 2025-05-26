import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { MainLayout } from './components'
import { Home } from './pages';
import './globals.tsx';

let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "*",
          Component: () => <div>404 not found</div>
        }
      ]
    }
  ],
  {
    basename: import.meta.env.MODE === "production" ? "/mini-ecommerce" : "/"
  }
);

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
