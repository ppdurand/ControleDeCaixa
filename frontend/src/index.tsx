import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ConfigProvider } from 'antd';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Dashboard } from './pages/dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Dashboard />
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider>
    <RouterProvider router={router} />
  </ConfigProvider>
);

reportWebVitals();
