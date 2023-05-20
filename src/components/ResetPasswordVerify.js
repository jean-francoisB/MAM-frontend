import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResetPasswordVerify = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

  const handleNewPasswordSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send request to server to reset password using token
      await axios.post("https://127.0.0.1:8000/api/reset-password/verify", {
        token: token,
        password: newPassword,
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
          <p>Votre mot de passe a été réinitialisé avec succès.</p>
          <button onClick={() => navigate("/login")}>Retour à la connexion</button>
        </div>
      ) : (
        <form onSubmit={handleNewPasswordSubmit}>
          <div>
            <label htmlFor="newPassword">Nouveau mot de passe :</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <button type="submit">Réinitialiser le mot de passe</button>
          <button onClick={() => navigate("/login")}>Retour</button>
        </form>
      )}
    </div>
  );
};

export default ResetPasswordVerify;
