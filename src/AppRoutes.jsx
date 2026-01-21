import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Enthusia page */}
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
