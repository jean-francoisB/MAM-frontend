import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

  const handleResetPasswordSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send request to server to initiate password reset
      await axios.post("https://127.0.0.1:8000/api/reset-password", {
        email: email,
      });

      setResetPasswordSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {resetPasswordSuccess ? (
        <div>
          <p>
            Un e-mail de réinitialisation de mot de passe a été envoyé à
            l'adresse {email}.
          </p>
          <button onClick={() => navigate("/login")}>Retour à la connexion</button>
        </div>
      ) : (
        <form onSubmit={handleResetPasswordSubmit}>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">Réinitialiser le mot de passe</button>
          <button onClick={() => navigate("/login")}>Retour</button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
