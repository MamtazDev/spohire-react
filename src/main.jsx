import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
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
import Billing from './components/Dashboard/Setting/Billing/Billing.jsx';
import Notification from './components/Dashboard/Setting/Notification/Notification.jsx';
import Password from './components/Dashboard/Setting/Password/Password';
import DashboardAnnouncements from './components/Dashboard/Announcements/DashboardAnnouncements.jsx';
import BasicInformation from './components/Dashboard/Setting/BasicInformation/BasicInformation.jsx';
import Coaches from './components/Dashboard/Coaches/Coaches.jsx';
import AddPlayer from './pages/AddPlayer/AddPlayer.jsx';
import AddPlayerInfo2 from './pages/AddPlayer/AddPlayerInfo2.jsx';
import AddPlayerInfo3 from './pages/AddPlayer/AddPlayerInfo3.jsx';
import ObservedClone from './components/Dashboard/ObservedClone/ObservedClone.jsx';
import Messages from './components/Dashboard/Messages/Messages.jsx';


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
    path: '/addplayer',
    element: <AddPlayer />
  },
  {
    path: '/addplayer2',
    element: <AddPlayerInfo2 />
  },
  {
    path: '/addplayer3',
    element: <AddPlayerInfo3 />
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
        path: '/dashboard/coaches',
        element: <Coaches />
      },
      {
        path: '/dashboard/viewDetails',
        element: <ViewDetails />
      }
      ,
      {
        path: '/dashboard/messages',
        element: <Messages />
      }
      ,
      {
        path: '/dashboard/observed',
        element: <ObservedClone />
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
      ,
      {
        path: '/dashboard/announcements',
        element: <DashboardAnnouncements />
      },
      {
        path: '/dashboard/basicinfo',
        element: <BasicInformation />
      }
    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)