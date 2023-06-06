import React, { useContext } from 'react';
import TokenContext from '../_utils/TokenContext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UserContext from '../_utils/UserContext';

function Navbar2({ isLoggedIn, prenom }) {
    const { setToken } = useContext(TokenContext);




    const styles = {
        black: "#000",
        backgroundColor: "#F0C3B9",
        textColor: 'dark',
        noUnderline: 'none'
    };

    // Déconnecte l'utilisateur en réinitialisant le token
    const handleLogout = () => {
        setToken('');
    };

    let navbarContent;

    if (isLoggedIn) {
        navbarContent = (

            <>
                <span>Bienvenue : {prenom}</span>
                <button onClick={handleLogout}>Déconnexion</button>
            </>
        )


    } else {
        navbarContent = (
            <Nav.Link href="/login/">Connexion</Nav.Link>
        );
    }

    return (
        <Navbar expand="lg" style={{ backgroundColor: styles.backgroundColor }} className="px-2">
            <Navbar.Brand href="/"><img src="/papillon.jpg" alt='logo' width="40" height="40" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar" className="justify-content-around">
                <Nav.Link href="/">Accueil</Nav.Link>
                <Nav.Link href="/pedagogie/">Notre pédagogie</Nav.Link>
                <Nav.Link href="/qui/">Qui sommes nous ?</Nav.Link>
                <Nav.Link href="/modalites/">Nos modalités d'accueil</Nav.Link>
                <Nav.Link href="/contact/">Contact</Nav.Link>
                <Nav.Link href="https://www.facebook.com/groups/302636787251962"><img src="/Logo-Facebook.png" alt='LogoFacebook' width="30" height="30"></img></Nav.Link>
                {navbarContent}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbar2;
