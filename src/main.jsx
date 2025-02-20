import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainPortal from './MainPortal/MainPortal.jsx';
import Invoices from './Components/Invoices/Invoices.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPortal />,
  },
  {
    path: '/invoices',
    element: <Invoices />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
