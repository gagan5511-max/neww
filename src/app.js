import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Header appears on all pages */}
      <Header />

      {/* Main content changes based on route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        {/* You can add more routes like Contact, About etc */}
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;