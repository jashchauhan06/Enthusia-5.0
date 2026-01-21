import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import TermsOfUse from './components/pages/TermsOfUse.jsx'
import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx'
import SponsorUs from './components/pages/SponsorUs.jsx'
import NotFound from './components/pages/NotFound.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/sponsor-us" element={<SponsorUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)