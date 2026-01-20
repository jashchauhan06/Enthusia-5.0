import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// Lazy load the SITank event page
const SITankPage = lazy(() => import('./events/sitank/index'));

// Loading fallback component matching Enthusia theme
const LoadingFallback = () => (
  <div className="fixed inset-0 bg-[#0a0a0f] flex items-center justify-center z-50">
    <div className="text-center">
      <div className="mb-8">
        <div className="inline-block w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <div className="text-purple-400 text-2xl font-bold tracking-widest mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        LOADING SITANK 2.0
      </div>
      <div className="text-purple-300/60 text-sm tracking-wider" style={{ fontFamily: 'monospace' }}>
        Initializing event platform...
      </div>
    </div>
  </div>
);

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Enthusia page */}
        <Route path="/" element={<App />} />
        
        {/* SITank event page - lazy loaded */}
        <Route 
          path="/events/sitank" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <SITankPage />
            </Suspense>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
