import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Main/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Profile from "../Pages/Dashboard/Profile/Profile";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import UpdateProfile from "../Pages/Dashboard/UpdateProfile/UpdateProfile";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import SearchPage from "../Pages/SearchPage/SearchPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllJobs from "../Pages/AllJobs/AllJobs";
import JobManagement from "../Pages/Dashboard/JobManagement/JobManagement";
import AddJob from "../Pages/AddJob/AddJob";
import JobDetails from "../Pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "searchPage",
        element: <SearchPage />,
      },
      {
        path: "allJobs",
        element: <AllJobs />,
      },
      {
        path: "jobDetails/:id",
        element: <JobDetails />,
      },
      {
        path: "/registration",
        errorElement: <ErrorPage />,
        element: <Registration />,
      },
      {
        path: "/login",
        errorElement: <ErrorPage />,
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "updateProfile",
        element: <UpdateProfile />,
      },

      //super admin related routes
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },

      {
        path: "jobManagement",
        element: <JobManagement />,
      },
      {
        path: "addJob",
        element: <AddJob />,
      },
    ],
  },
]);

export default router;
