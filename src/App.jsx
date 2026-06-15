import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './pages/Pricing';
import Legal from './pages/Legal';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precios" element={<Pricing />} />
        <Route path="/privacy-policy" element={<Legal />} />
        <Route path="/privacidad" element={<Legal />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
