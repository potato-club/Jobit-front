import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobitPage from "./JobitPage"; // C:\Users\ghhk0\Desktop\잡아잇20250317\GamzaJobIt\src\MainPage.js
import Signup from "./SignUp";
import Home from "./Home";
import LocalSignuPage from "./LocalSignuPage";
import SignUpLocal from "./SignUpLocal";
import MoreInfo from "./moreinfo/MoreInfo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lsp" element={<LocalSignuPage />} />
        <Route path="/signuplocal" element={<SignUpLocal />} />
        <Route path="/jp" element={<JobitPage />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
