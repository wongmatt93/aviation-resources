import "./ConfirmForgotPasswordCode.css";
import { FormEvent, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { BsShieldFillCheck } from "react-icons/bs";
import { HiHashtag } from "react-icons/hi";
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../../UserPool";

interface Props {
  closeModal: () => void;
  afterConfirm: () => void;
}

const ConfirmForgotPasswordCode = ({ closeModal, afterConfirm }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");

  const getUser = () =>
    new CognitoUser({
      Username: email,
      Pool,
    });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      getUser().confirmPassword(code, password, {
        onSuccess: (data) => {
          afterConfirm();
          console.log("onSuccess:", data);
        },
        onFailure: (err) => console.error("onFailure", err),
      });
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="ConfirmForgotPasswordCode">
      <h2>Change Password</h2>
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
          <label htmlFor="code">
            <HiHashtag /> Confirmation Code
          </label>
          <input
            type="text"
            name="code"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button className="confirm-code-button">Confirm</button>
      </form>
      <button onClick={closeModal} className="close-button">
        Cancel
      </button>
    </div>
  );
};

export default ConfirmForgotPasswordCode;
