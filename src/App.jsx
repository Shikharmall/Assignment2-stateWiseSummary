import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import OpenDetails from "./pages/OpenDetails";
import NoPage from "./pages/NoPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/opendetails" element={<OpenDetails />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
