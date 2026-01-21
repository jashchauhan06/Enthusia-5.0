import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import EventWrapper from './components/events/EventWrapper';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Enthusia page */}
        <Route path="/" element={<App />} />

        {/* SITank event page - lazy loaded */}
        <Route
          path="/SITank 2.0"
          element={<EventWrapper src="http://localhost:5177" title="SITANK 2.0" />}
        />

        {/* Integrated Events */}
        <Route
          path="/SITNovate"
          element={<EventWrapper src="http://localhost:5176" title="SITNOVATE 2.0" />}
        />
        <Route
          path="/CodeSprint"
          element={<EventWrapper src="http://localhost:5175" title="CODESPRINT 2.0" />}
        />
        <Route
          path="/BuildBrand"
          element={<EventWrapper src="http://localhost:5174" title="BUILDBRAND" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
