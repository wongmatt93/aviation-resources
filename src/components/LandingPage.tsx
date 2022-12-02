import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
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
      <LoginModal />
      <SignUpModal />
      <button onClick={() => navigate("/resources")}>Guest</button>
    </main>
  );
};

export default LandingPage;
