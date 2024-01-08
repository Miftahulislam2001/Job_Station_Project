import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './components/Layout/Layout/Admin.jsx';
import Home from './components/Layout/Home/Home.jsx';
import Blog from './components/Layout/Blog/Blog.jsx';
import About from './components/Layout/About/About.jsx';
import AppliedJob from './components/Layout/AppliedJob/AppliedJob.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "appliedJob",
        element: <AppliedJob></AppliedJob>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
