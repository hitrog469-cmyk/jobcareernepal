import { createBrowserRouter } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Job from "./pages/Job";
import Dashboard from "./pages/Dashboard";
import CompanyReviews from "./pages/CompanyReviews";
import SalaryExplorer from "./pages/SalaryExplorer";
import GovernmentJobs from "./pages/GovernmentJobs.tsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "government", element: <GovernmentJobs /> },
      { path: "job/:id", element: <Job /> },
      { path: "companies", element: <CompanyReviews /> },
      { path: "salary", element: <SalaryExplorer /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
