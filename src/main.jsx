import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Main/Main';
import { Auth0Provider } from '@auth0/auth0-react';
import Product from './Component/Product/Product';
import Home from './Component/Home/Home';
import AddToCartPage from './Component/AddToCartPage/AddToCartPage';
import Contact from './Component/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/product',
        element:<Product></Product>
      },
      {
        path:'/cart',
        element:<AddToCartPage></AddToCartPage>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
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