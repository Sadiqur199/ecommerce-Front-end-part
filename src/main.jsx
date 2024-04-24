import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Main/Main';
import { Auth0Provider } from '@auth0/auth0-react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-cmejvl1ug84z5tqj.us.auth0.com"
    clientId="b9AxE5LZ6spwygbpP6WBqCdKgkMG8nGn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>

);