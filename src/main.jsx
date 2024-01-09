import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './components/Layout/Admin';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import AppliedJob from './components/AppliedJob/AppliedJob';
import DetailsJob from './components/DetailsJob/DetailsJob'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: ()=> fetch('../public/cartData.json'),
      },
      {
        path: "/detailsJob/:id",
        element: <DetailsJob></DetailsJob>,
        
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "statistic",
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

    <RouterProvider router={router} />

)