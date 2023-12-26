import Home from "../pages/Home.jsx";
import TransfarMarket from "../pages/TransferMarket/TransfarMarket.jsx";
import Announcements from "../pages/Announcement/Announcements.jsx";
import Pricing from "../pages/pricing/Pricing.jsx";
import DashboardLayout from "../components/Dashboard/DashboardLayout/DashboardLayout";
import JobOffer from "../pages/JobOffer/JobOffer.jsx";
import JobOffers from "../components/Dashboard/dashbordJobOffers/JobOffers";
import Players from "../components/Dashboard/players/Players";
import ViewDetails from "../components/Dashboard/viewDetails/ViewDetails";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import PaymentProcess from "../pages/pricing/PaymentProcess.jsx";
import Billing from "../components/Dashboard/Setting/Billing/Billing.jsx";
import Notification from "../components/Dashboard/Setting/Notification/Notification.jsx";
import Password from "../components/Dashboard/Setting/Password/Password";
import DashboardAnnouncements from "../components/Dashboard/Announcements/DashboardAnnouncements.jsx";
import Coaches from "../components/Dashboard/Coaches/Coaches.jsx";
import AddPlayer from "../pages/AddPlayer/AddPlayer.jsx";
import AddPlayerInfo2 from "../pages/AddPlayer/AddPlayerInfo2.jsx";
import AddPlayerInfo3 from "../pages/AddPlayer/AddPlayerInfo3.jsx";
import ObservedClone from "../components/Dashboard/ObservedClone/ObservedClone.jsx";
import Messages from "../components/Dashboard/Messages/Messages.jsx";
import OverView from "../components/Dashboard/OverView/OverView.jsx";
import CoachesProfile from "../components/Dashboard/Coaches/CoachesProfile.jsx";
import EditAnnouncements from "../pages/Announcement/EditAnnouncements.jsx";
import Layout from "../Layout/Layout.jsx";
import EditPlayerDetails from "../components/Dashboard/viewDetails/EditPlayerDetails.jsx";
import Gallary from "../pages/TransferMarket/Gallary.jsx";
import { createBrowserRouter } from "react-router-dom";
import EditCoachProfile from "./../components/Dashboard/Coaches/EditCoachProfile";
import ViewProfile from "../components/Dashboard/viewDetails/ViewProfile.jsx";
import CoachesDetails from "../components/Dashboard/Coaches/CoachesDetails.jsx";
import AddProfile from "../pages/AddProfile/AddProfile.jsx";
import SubscribedRoute from "./SubscribedRoute.jsx";
import CreateAnnouncements from "../pages/Announcement/CreateAnnouncements.jsx";
import BlankMessages from "../components/Dashboard/Messages/BlankMessages.jsx";
import PaymentRoute from "./PaymentRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/transfarMarket",
        element: <TransfarMarket />,
      },
      {
        path: "/gallary/:id",
        element: <Gallary />,
      },
      {
        path: "/paymentProcess",
        element: (
          <PaymentRoute>
            <PaymentProcess />
          </PaymentRoute>
        ),
      },
      {
        path: "/jobOffer",
        element: <JobOffer />,
      },
      {
        path: "/announcements",
        element: <Announcements />,
      },

      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/addProfile",
    element: <AddProfile />,
  },
  {
    path: "/addplayer",
    element: <AddPlayer />,
  },
  {
    path: "/addplayer2",
    element: <AddPlayerInfo2 />,
  },
  {
    path: "/addplayer3",
    element: <AddPlayerInfo3 />,
  },

  {
    path: "/dashboard",
    element: (
      <SubscribedRoute>
        <DashboardLayout />
      </SubscribedRoute>
    ),

    children: [
      {
        path: "/dashboard",
        element: <OverView />,
      },
      {
        path: "/dashboard/jobOffers",
        element: <JobOffers />,
      },
      {
        path: "/dashboard/players",
        element: <Players />,
      },
      {
        path: "/dashboard/coaches",
        element: <Coaches />,
      },
      {
        path: "/dashboard/coacheDetails/:id",
        element: <CoachesDetails />,
      },
      {
        path: "/dashboard/coachesProfile",
        element: <CoachesProfile />,
      },
      {
        path: "/dashboard/editCoacheProfile",
        element: <EditCoachProfile />,
      },
      {
        path: "/dashboard/viewDetails/:id",
        element: <ViewDetails />,
      },
      {
        path: "/dashboard/viewProfile",
        element: <ViewProfile />,
      },
      {
        path: "/dashboard/editPlayerDetals",
        element: <EditPlayerDetails />,
      },
      {
        path: "/dashboard/messages/:id",
        element: <Messages />,
      },
      {
        path: "/dashboard/messages",
        element: <BlankMessages />,
      },
      {
        path: "/dashboard/observed",
        element: <ObservedClone />,
      },
      {
        path: "/dashboard/billing",
        element: <Billing />,
      },
      {
        path: "/dashboard/notification",
        element: <Notification />,
      },
      {
        path: "/dashboard/password",
        element: <Password />,
      },
      {
        path: "/dashboard/announcements",
        element: <DashboardAnnouncements />,
      },
      {
        path: "/dashboard/editAnnouncements",
        element: <EditAnnouncements />,
      },
      {
        path: "/dashboard/createAnnouncements",
        element: <CreateAnnouncements />,
      },
    ],
  },
]);
