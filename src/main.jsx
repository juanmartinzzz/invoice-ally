import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainPortal from './MainPortal/MainPortal.jsx';
import Menubar from './components/Menubar/Menubar.jsx';
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
    {/* if path not '/' then show menubar */}
    {window.location.pathname !== '/' ? (
      <div className="flex">
        <Menubar />

        <RouterProvider router={router} />
      </div>
    ) : (
      <RouterProvider router={router} />
    )}
  </StrictMode>
);
