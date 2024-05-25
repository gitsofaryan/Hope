import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Page from "./Page";
import SignIn from "./components/auth/SignIn";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Page />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
