import "./ForgotPasswordForm.css";
import { FaUserCircle } from "react-icons/fa";
import { CognitoUser } from "amazon-cognito-identity-js";
import { FormEvent, useState } from "react";
import Pool from "../../UserPool";

interface Props {
  closeModal: () => void;
  afterForgot: () => void;
}

const ForgotPasswordForm = ({ closeModal, afterForgot }: Props) => {
  const [email, setEmail] = useState("");

  const getUser = () =>
    new CognitoUser({
      Username: email,
      Pool,
    });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    getUser().forgotPassword({
      onSuccess: (data) => console.log("onSuccess:", data),
      onFailure: (err) => console.error("onFailure", err),
      inputVerificationCode: (data) => {
        afterForgot();
        console.log("Input Code:", data);
      },
    });
  };

  return (
    <div className="ForgotPasswordForm">
      <h2>Forgot Password</h2>
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
        </div>
        <button className="reset-code-button">Reset</button>
      </form>
      <button onClick={closeModal} className="close-button">
        Cancel
      </button>
      <button onClick={afterForgot} className="input-button">
        Input Code
      </button>
    </div>
  );
};

export default ForgotPasswordForm;
