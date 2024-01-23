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
import JobDetails from "../pages/JobOffer/JobDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AppliedJobs from "../components/Dashboard/dashbordJobOffers/AppliedJobs.jsx";
import MyAppliedJob from "../components/Dashboard/dashbordJobOffers/MyAppliedJob.jsx";
import AddedItems from "../components/Dashboard/AddJobOffer/AddedItems.jsx";

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
        path: "/jobOffer/jobDetails/:id",
        element: <JobDetails />,
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
  // {
  //   path: "/addplayer",
  //   element: <AddPlayer />,
  // },
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
    element: <DashboardLayout />,

    children: [
      {
        path: "/dashboard",
        element: (
          // <SubscribedRoute>
          <OverView />

          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/jobOffers",
        element: (
          // <SubscribedRoute>
          <JobOffers />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/appliedJobs",
        element: (
          // <SubscribedRoute>
          <AppliedJobs />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/addedItems",
        element: (
          // <SubscribedRoute>
          // <AppliedJobs />
          <AddedItems />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/myAppliedJobs",
        element: (
          // <SubscribedRoute>
          // <AppliedJobs />
          <MyAppliedJob />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/players",
        element: (
          <SubscribedRoute>
            <Players />
          </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/coaches",
        element: (
          <SubscribedRoute>
            <Coaches />
          </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/coacheDetails/:id",
        element: (
          <SubscribedRoute>
            <CoachesDetails />
          </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/coachesProfile",
        element: (
          <SubscribedRoute>
            <CoachesProfile />
          </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/editCoacheProfile",
        element: (
          // <SubscribedRoute>
          <EditCoachProfile />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/viewDetails/:id",
        element: (
          // <SubscribedRoute>
          <ViewDetails />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/viewProfile",
        element: (
          <PrivateRoute>
            <ViewProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/editPlayerDetals",
        element: (
          // <SubscribedRoute>
          <PrivateRoute>
            <EditPlayerDetails />
          </PrivateRoute>

          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/messages/:id",
        element: (
          // <SubscribedRoute>
          <Messages />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/messages",
        element: (
          // <SubscribedRoute>
          <BlankMessages />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/observed",
        element: (
          // <SubscribedRoute>
          <ObservedClone />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/billing",
        element: (
          // <SubscribedRoute>
          <Billing />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/notification",
        element: (
          // <SubscribedRoute>
          <Notification />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/password",
        element: (
          // <SubscribedRoute>
          <Password />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/announcements",
        element: (
          // <SubscribedRoute>
          <DashboardAnnouncements />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/editAnnouncements/:id",
        element: (
          // <SubscribedRoute>
          <EditAnnouncements />
          // </SubscribedRoute>
        ),
      },
      {
        path: "/dashboard/createAnnouncements",
        element: (
          // <SubscribedRoute>
          <CreateAnnouncements />
          // </SubscribedRoute>
        ),
      },
    ],
  },
]);
