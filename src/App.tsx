import React, { useContext, useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contact, Home, SignIn, SignUp } from "./views";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/menu";

const App: React.FC = () => {

  return (
    <Menu>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Menu>
  );
};

export default App;
