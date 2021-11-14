import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, SignIn, SignUp } from "./views";
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
        </Routes>
      </Router>
    </Menu>
  );
};

export default App;
