import React, { useContext, useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contact, Home, SignIn, SignUp, CredicardRegister, Income, Expense, Report, Settings, UserHome, UserSettings, Profile, AccountsRegister } from "./views";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/menu";
import ServicesProvider from "./hooks/services/provider";
import { SecurityProvider } from "./hooks";

const App: React.FC = () => {

  return (
    <ServicesProvider>
      <SecurityProvider>
        <Menu>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/credicardRegister" element={<CredicardRegister />} />
              <Route path="/income" element={<Income />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/report" element={<Report />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/userHome" element={<UserHome />} />
              <Route path="/userSettings" element={<UserSettings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/accounts" element={<AccountsRegister />} />
            </Routes>
          </Router>
        </Menu>
      </SecurityProvider>
    </ServicesProvider>
  );
};

export default App;
