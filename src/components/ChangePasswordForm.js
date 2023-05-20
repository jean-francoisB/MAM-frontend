import React, { useState } from 'react';

function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [error, setError] = useState('');

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    // Vérifier l'ancien mot de passe en envoyant une requête à votre API
    fetch('/api/verifyPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ oldPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.isValid) {
          // Mettre à jour le mot de passe en envoyant une autre requête à votre API
          fetch('/api/changePassword', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newPassword }),
          })
            .then((response) => response.json())
            .then((data) => {
              setIsPasswordChanged(true);
            })
            .catch((error) => {
              setError('Une erreur s\'est produite lors de la modification du mot de passe.');
            });
        } else {
          setError('Ancien mot de passe incorrect.');
        }
      })
      .catch((error) => {
        setError('Une erreur s\'est produite lors de la vérification du mot de passe.');
      });
  };

  if (isPasswordChanged) {
    return <p>Le mot de passe a été modifié avec succès !</p>;
  }

  return (
    <form onSubmit={handleChangePassword}>
      <h2>Modifier le mot de passe</h2>
      {error && <p className="error">{error}</p>}
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

export default ChangePasswordForm;
