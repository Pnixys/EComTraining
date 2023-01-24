import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { CardDetails } from './pages/cardDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'productDetails/:productId',
    element: <CardDetails />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Layout>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Layout>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
