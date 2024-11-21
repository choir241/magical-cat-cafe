import { StrictMode, lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";

const Landing = lazy(() => import("./App.tsx"));
const Profile = lazy(() => import("./pages/Profile.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
