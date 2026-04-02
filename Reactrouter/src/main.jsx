import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from "react-router";
import Contact from "./components/COntact.jsx";
import User from "./components/User/User.jsx";
import Github, { GitHUbDatafetch } from "./components/User/Github.jsx";
import AdminLayout from "./components/admin/AdminLayout.jsx";
import AdminRoute from "./components/admin/AdminRoute.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";

//make sure all in small case
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/user/:id", element: <User /> },
      // { path: "/github?/:followers", element: <Github />,
      {
        path: "/github",
        element: <Github />,
        loader: GitHUbDatafetch ? GitHUbDatafetch : {}, // this will fetch before user open that before meaning when user hover on it trigger the event to fetch call by loader
      },
    ],
  },
  // 🔥 ADMIN PANEL ROUTES
  {
    path: "/admin",
    // element: <AdminLayout />,// basic
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> }, // 👈 default page
      { path: "dashboard", element: <Dashboard /> },

      // Blog routes
      // { path: "blogs", element: <BlogList /> },
      // { path: "blogs/add", element: <AddBlog /> },
      // { path: "blogs/edit/:id", element: <EditBlog /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);

/*

const AdminRoute = ({ children }) => {
  const isAdmin = true; // replace with auth logic

  return isAdmin ? children : <Navigate to="/home" />;
};

*/

//this is not running from videos  chai aur code react router  https://www.youtube.com/watch?v=VJov5QWEKE4&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=12
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes path:'/' ,element:{<Layout/> }>,
//       <Route path:'', element:{<Home/>} />,
//       <Route path:'contact', element:{<Contact/>} />,
//       <Route path:'about', element:{<About/>} />,
//     </Routes>
//   )
// )
