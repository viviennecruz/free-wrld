import { React, Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing/landing";
import AboutPage from "./pages/about/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <LandingPage /> } />
        <Route exact path="/about" element={ <AboutPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
