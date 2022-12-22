import { FormEvent, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { BsShieldFillCheck } from "react-icons/bs";
import UserPool from "../../UserPool";
import "./SignupForm.css";

interface Props {
  closeModal: () => void;
  afterSignup: () => void;
}

const SignupForm = ({ closeModal, afterSignup }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      UserPool.signUp(
        email,
        password,
        // @ts-ignore
        [{ Name: "name", Value: "" }],
        null,
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            afterSignup();
            console.log(data);
          }
        }
      );
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="SignupForm">
      <h2>Sign Up</h2>
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
          <label htmlFor="confirm-password">
            <BsShieldFillCheck /> Confirm Password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button className="signup-button">Sign Up</button>
      </form>
      <button onClick={closeModal} className="close-button">
        Cancel
      </button>
    </div>
  );
};

export default SignupForm;
