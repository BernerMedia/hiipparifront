import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Laskeutumissivu from './components/Laskeutumissivu';

export default function HiippariRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Laskeutumissivu />} />
      </Routes>
    </Router>
  );
}
