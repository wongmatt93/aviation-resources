import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import CommunityPage from "./components/Community/CommunityPage";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage";
import LessonsPage from "./components/Lessons/LessonsPage";
import ResourcesPage from "./components/Resources/ResourcesPage";
import TestsPage from "./components/Tests/TestsPage";
import UserProfilePage from "./components/User/UserProfilePage";
import AuthContext from "./Context/AuthContext";

function App() {
  const { signedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route
            path="/tests"
            element={signedIn ? <TestsPage /> : <Navigate to="/" />}
          />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/user-profile" element={<UserProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
