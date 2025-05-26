import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App';

let router = createBrowserRouter(
  [
    {
      path: "/",
      Component: App
    },
    {
      path: "*",
      Component: () => <div>404 not found</div>
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
