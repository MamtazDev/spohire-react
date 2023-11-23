import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import TransfarMarket from './pages/TransferMarket/TransfarMarket.jsx';
import Announcements from './pages/Announcement/Announcements.jsx';
import Pricing from './pages/pricing/Pricing.jsx';
import DashboardLayout from './components/Dashboard/DashboardLayout/DashboardLayout';
import JobOffer from './pages/JobOffer/JobOffer.jsx';
import JobOffers from './components/Dashboard/dashbordJobOffers/JobOffers';
import Players from './components/Dashboard/players/Players';
import ViewDetails from './components/Dashboard/viewDetails/ViewDetails';
import Login from './Authentication/Login/Login';
import SignUp from './Authentication/SignUp/SignUp';
import PaymentProcess from './pages/pricing/PaymentProcess.jsx';
import Observed from './components/Dashboard/observed/observed.jsx';
import Billing from './components/Dashboard/Setting/Billing/Billing.jsx';
import Notification from './components/Dashboard/Setting/Notification/Notification.jsx';
import Password from './components/Dashboard/Setting/Password/Password';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/transfarMarket',
    element: <TransfarMarket />
  },
  {
    path: '/paymentProcess',
    element: <PaymentProcess />
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
      },
      {
        path: '/dashboard/players',
        element: <Players />
      },
      {
        path: '/dashboard/viewDetails',
        element: <ViewDetails />
      }
      ,
      {
        path: '/dashboard/observed',
        element: <Observed />
      }
      ,
      {
        path: '/dashboard/billing',
        element: <Billing />
      }
      ,
      {
        path: '/dashboard/notification',
        element: <Notification />
      }
      ,
      {
        path: '/dashboard/password',
        element: <Password />
      }
    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)