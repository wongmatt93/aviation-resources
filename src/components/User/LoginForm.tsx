import "./LoginForm.css";
import { FormEvent, useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";

interface Props {
  closeModal: () => void;
}

const LoginForm = ({ closeModal }: Props) => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signIn(email, password)
      .then((data: any) => {
        console.log("LoggedIn!", data);
      })
      .catch((err: any) => {
        console.log("Failed to login", err);
      });
  };
  return (
    <div className="LoginForm">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="contents">
          <label htmlFor="email">
            <FaUserCircle /> Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">
            <BsShieldLockFill /> Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-button">Log in</button>
      </form>
      <button onClick={closeModal} className="close-button">
        Cancel
      </button>
    </div>
  );
};

export default LoginForm;
