import React from "react";
import Login from './components/login';
import { Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Routes>
    <Route path="login" element={<Login />} />
      </Routes>
  );
}

export default App;