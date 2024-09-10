import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './pages/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Advertisements from './pages/Advertisements';
import AdvertisementDetail from './pages/AdvertisementDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/advertisements',
    element: <Advertisements />
  },
  {
    path: '/advertisements/:id',
    element: <AdvertisementDetail />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
