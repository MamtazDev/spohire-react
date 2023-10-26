import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './responsive.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import TransfarMarket from './pages/TransfarMarket';
import Announcements from './pages/Announcements';
import Pricing from './pages/Pricing';
import DashboardLayout from './components/Dashboard/DashboardLayout/DashboardLayout';
import JobOffer from './pages/JobOffer';
import JobOffers from './components/Dashboard/dashbordJobOffers/JobOffers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/transfarMarket',
    element: <TransfarMarket />
  },

  {
    path: '/jobOffer',
    element: <JobOffer />
  },

  {
    path: '/announcements',
    element: <Announcements />
  },

  {
    path: '/pricing',
    element: <Pricing />
  },

  {
    path: '/dashboard',
    element: <DashboardLayout />,

    children: [
      {
        path: '/dashboard/jobOffers',
        element: <JobOffers />
      }
    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)