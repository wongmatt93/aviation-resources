import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CommunityPage from "./components/Community/CommunityPage";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import LessonsPage from "./components/Lessons/LessonsPage";
import LoginPage from "./components/LoginPage";
import ResourcesPage from "./components/Resources/ResourcesPage";
import SignupPage from "./components/SignupPage";
import TestsPage from "./components/Tests/TestsPage";
import UserProfilePage from "./components/UserProfilePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/tests" element={<TestsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/user-profile" element={<UserProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
