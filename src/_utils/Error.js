import React from "react";

const Error = () => {
    return (
        <div className="error-404">
        <h1>Oops!</h1>
        <h2>Erreur 404 - Page non trouvée</h2>
        <p>Désolé, la page que vous recherchez est introuvable.</p>
        <p>Veuillez vérifier l'URL ou retourner à la <a href="/">page d'accueil</a>.</p>
        </div>
    );
};

export default Error;