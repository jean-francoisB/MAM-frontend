import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

const LoginTest = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [resetPasswordEmail, setResetPasswordEmail] = useState("");
    const [resetPasswordToken, setResetPasswordToken] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

    // Handle form data changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle login form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get("https://127.0.0.1:8000/api/users");
            const users = response.data["hydra:member"];

            const matchedUser = users.find(
                (user) => user.email === formData.email
            );

            if (matchedUser) {
                const isPasswordMatched = await bcrypt.compare(
                    formData.password,
                    matchedUser.password
                );

                if (isPasswordMatched) {
                    navigate("/contact");
                } else {
                    console.log("Mot de passe incorrect");
                }
            } else {
                console.log("Adresse e-mail non trouvée");
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Handle reset password form submission
    const handleResetPasswordSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send request to server to initiate password reset
            await axios.post("https://127.0.0.1:8000/api/reset-password", {
                email: resetPasswordEmail,
            });

            setResetPasswordSuccess(true);
        } catch (error) {
            console.log(error);
        }
    };

    // Handle new password form submission
    const handleNewPasswordSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send request to server to reset password using token
            await axios.post("https://127.0.0.1:8000/api/reset-password/verify", {
                email: resetPasswordEmail,
                token: resetPasswordToken,
                password: newPassword,
            });

            setResetPasswordSuccess(true);
        } catch (error) {
            console.log(error);
        }
    };

    // Render login form
    const renderLoginForm = () => (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password">Mot de passe :</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Se connecter</button>
            <button onClick={() => navigate("/reset-password")}>
                Mot de passe oublié
            </button>
        </form>
    );

    // Render reset password form
    const renderResetPasswordForm = () => (
        <form onSubmit={handleResetPasswordSubmit}>
            <div>
                <label htmlFor="resetPasswordEmail">Email :</label>
                <input
                    type="email"
                    id="resetPasswordEmail"
                    name="resetPasswordEmail"
                    value={resetPasswordEmail}
                    onChange={(e) => setResetPasswordEmail(e.target.value)}
                />
            </div>

            <button type="submit">Envoyer</button>
            <button onClick={() => navigate("/login")}>Retour</button>
        </form>
    );

    // Render new password form
    const renderNewPasswordForm = () => (
        <form onSubmit={handleNewPasswordSubmit}>
            <div>
                <label htmlFor="resetPasswordToken">Token :</label>
                <input
                    type="text"
                    id="resetPasswordToken"
                    name="resetPasswordToken"
                    value={resetPasswordToken}
                    onChange={(e) => setResetPasswordToken(e.target.value)}
                />
            </div>
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
    );

    return (
        <div>
            {resetPasswordSuccess ? (
                <div>
                    <p>Votre mot de passe a été réinitialisé avec succès.</p>
                    <button onClick={() => navigate("/login")}>Retour à la connexion</button>
                </div>
            ) : (
                renderLoginForm()
            )}

            <hr />

            {location.pathname === "/reset-password" && !resetPasswordSuccess && (
                <div>
                    <p>Entrez votre adresse e-mail pour réinitialiser votre mot de passe :</p>
                    {renderResetPasswordForm()}
                </div>
            )}

            {location.pathname === "/reset-password/verify" && !resetPasswordSuccess && (
                <div>
                    <p>Entrez votre nouveau mot de passe :</p>
                    {renderNewPasswordForm()}
                </div>
            )}
        </div>
    );
};

export default LoginTest;

