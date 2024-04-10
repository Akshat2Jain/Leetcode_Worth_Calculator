import React from "react";
import Home from "./components/Home";
import { UserProvider } from "./components/userContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeetCodeStats from "./components/LeetcodeStats";
import ProfileWorth from "./components/ProfileWorth";

const App = () => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leetcodestats" element={<LeetCodeStats />} />
            <Route path="/profileWorth" element={<ProfileWorth />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
};

export default App;
