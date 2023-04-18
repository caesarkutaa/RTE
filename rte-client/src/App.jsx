import React from "react";
import Admin from './components/pages/Admin';
import Login from './components/login';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from "./components/RequireAuth";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Routes>
    <Route path="login" element={<Login />} />
    <Route path="/" element={<Home />} />
    <Route element={<RequireAuth />}>
      <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
  );
}

export default App;