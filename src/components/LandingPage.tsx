import "./LandingPage.css";
import { useNavigate, Link } from "react-router-dom";
import LoginModal from "./User/LoginModal";
import SignUpModal from "./User/SignUpModal";
import { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";

const LandingPage = () => {
  const { signedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    signedIn && navigate("/resources");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signedIn]);

  return (
    <main className="LandingPage">
      <h2>Aviation Resources</h2>
      <p>Please Select an option to continue.</p>
      <div className="user-options">
        <LoginModal />
        <SignUpModal />
        {/* redirects to Resources page like the mobile app */}
        <button onClick={() => navigate("/resources")} className="guest-option">
          Guest
        </button>
        <div>
          <Link to="/">Forgot Password</Link>
          <span className="pipe">|</span>
          <Link to="/">Confirm Code</Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
