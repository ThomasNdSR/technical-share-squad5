import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";
import App from "../App";

export const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
