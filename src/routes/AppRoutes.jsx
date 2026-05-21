import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import MainLayout from "@/components/Layout/MainLayout";

const HomePage = lazy(() => import("../pages/home.jsx"));
const AboutPage = lazy(() => import("../pages/about.jsx"));
const CodeSplittingPage = lazy(() => import("../pages/code-splitting.jsx"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/code-splitting" Component={CodeSplittingPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
