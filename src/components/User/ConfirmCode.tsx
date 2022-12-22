import "./ConfirmCode.css";
import { FaUserCircle } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../../UserPool";

Modal.setAppElement("#root");

interface Props {
  closeModal: () => void;
  afterConfirm: () => void;
}

const ConfirmCode = ({ closeModal, afterConfirm }: Props) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const user = new CognitoUser({
      Username: email,
      Pool,
    });

    user.confirmRegistration(code, true, (err, result) => {
      if (err) {
        console.log("error", err);
      } else {
        afterConfirm();
        console.log(result);
      }
    });
  };

  return (
    <div className="ConfirmCode">
      <h2>Confirm Code</h2>
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

export default ConfirmCode;
