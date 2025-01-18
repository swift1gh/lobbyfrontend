import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import ProjectsPage from "./pages/ProjectsPage";
import MessagesPage from "./pages/MessagesPage";
import UserProfilePage from "./pages/UserProfilePage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main Website Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="profile" element={<UserProfilePage />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
