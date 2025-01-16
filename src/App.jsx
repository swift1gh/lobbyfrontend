import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
import ProjectsPage from "./pages/ProjectsPage";
import MessagesPage from "./pages/MessagesPage";
import UserProfilePage from "./pages/UserProfilePage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="community" element={<CommunityPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="messages" element={<MessagesPage />} />
      <Route path="profile" element={<UserProfilePage />} />
      <Route path="login" element={<LoginPage />} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true, // Opt-in to startTransition handling
      v7_relativeSplatPath: true, // Opt-in to relative splat path changes
    },
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
