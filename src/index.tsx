import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { AppLayout } from '@components/templates'
import { Home, NotFound, SearchResults } from '@pages';
import './globals.tsx';

let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/search",
          element: <SearchResults />
        },
        {
          path: "*",
          element: <NotFound />
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
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
