import React from "react";

import ChangePasswordForm from "../components/ChangePasswordForm";

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Vérifier les informations de connexion ici
      const isValid = true; // Remplacez par votre logique de validation
  
      if (isValid) {
        setIsLoggedIn(true);
      }
    };
  
    if (isLoggedIn) {
      return <ChangePasswordForm />;
    }
  
    return (
     <form onSubmit={handleChangePassword}>
        <h2>Modifier le mot de passe</h2>
        <div>
          <label htmlFor="oldPassword">Ancien mot de passe:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
        </div>
        <div>
          <label htmlFor="newPassword">Nouveau mot de passe:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <button type="submit">Modifier</button>
      </form>
    );
  }

  export default LoginForm;