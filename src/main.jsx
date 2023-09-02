import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/portfolio",
    element: <Portfolio />
  },
  {
    path:"/about",
    element: <About />
  },
  {
    path:"/contact",
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
