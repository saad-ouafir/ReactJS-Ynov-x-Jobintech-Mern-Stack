import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Articles from "../Layouts/ArticlesLayout";
import ArticleDetail from "../pages/articles/ArticleDetail";
import ArticleComments from "../pages/articles/ArticleComments";

import ProtectedRoute from "./ProtectedRoute";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Editor from "../pages/Editor";
import RoleProtectedRoute from "./RoleProtectedRoute";
import Help from "../pages/Help";

import ProfileLayout from "../Layouts/ProfileLayout";
import Profile from "../pages/profile/Profile";
import ProfileInfo from "../pages/profile/ProfileInfo";
import ProfilePosts from "../pages/profile/ProfilePosts";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/articles",
        element: <Articles />,
        children: [
          {
            path: ":id",
            element: <ArticleDetail />,
            children: [{ path: "comments", element: <ArticleComments /> }],
          },
        ],
      },

      {
        path: "/admin",
        element: (
          <RoleProtectedRoute requiredRole={["admin"]}>
            <Admin />
          </RoleProtectedRoute>
        ),
      },

      { path: "/login", element: <Login /> },

      {
        path: "/editor",
        element: (
          <RoleProtectedRoute requiredRole={["editor", "admin"]}>
            <Editor />
          </RoleProtectedRoute>
        ),
      },

      { path: "/help", element: <Help /> },

      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Profile /> },
          { path: "info", element: <ProfileInfo /> },
          { path: "posts", element: <ProfilePosts /> },
        ],
      },

      { path: "/*", element: <NotFound /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
