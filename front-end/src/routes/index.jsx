import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Authentication } from "../pages/Authentication";
import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile";
import { HomePage } from "../pages/HomePage";

export const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
