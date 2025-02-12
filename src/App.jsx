import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from './components/Test';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import AnyCaas from './pages/AnyCaas';
import AnyBaas from './pages/AnyBaas';
import AnyPaas from './pages/AnyPaas';
import About from './pages/About';
import Contact from './pages/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <Home/>,  
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/anycaas",
        element: <AnyCaas />,
      },
      {
        path: "/anybaas",
        element: <AnyBaas />,
      },
      {
        path: "/anypaas",
        element: <AnyPaas />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return(
  
  <RouterProvider router={router} />

)
};

export default App;
