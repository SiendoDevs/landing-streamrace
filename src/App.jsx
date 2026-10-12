import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import("./components/Home"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Legal = lazy(() => import("./pages/Legal"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Eula = lazy(() => import("./pages/Eula"));

function PageFallback() {
  return <div className="min-h-screen bg-[#050505]" />;
}

function App() {
  return (
    <Router>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/precios" element={<Pricing />} />
          <Route path="/privacy-policy" element={<Legal />} />
          <Route path="/privacidad" element={<Legal />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/eula" element={<Eula />} />
          <Route path="/acuerdo-de-licencia" element={<Eula />} />
        </Routes>
      </Suspense>
      <Analytics />
    </Router>
  );
}

export default App;
