import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PortfolioProvider } from "./context/PortfolioContext";
import { Home } from "./pages/Home";
import Professionals from "./pages/Professionals";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  return (
    <PortfolioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </PortfolioProvider>
  );
};

export default App;
