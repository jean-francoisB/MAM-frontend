import React, { useContext } from "react";
import Navbar2 from '../components/NavBar2';
import Footer from '../components/Footer';
import UserContext from '../_utils/UserContext';
import { Container } from 'reactstrap';

function Medias() {

    const bodyStyles = {
        backgroundColor: "#FCE8FF",
        textColor: 'dark',
    }

    const prenom = useContext(UserContext);

    return (
        <UserContext.Provider value={prenom}>
            <div style={{ backgroundColor: bodyStyles.backgroundColor }}>
                <Container className='mw-100 p-0' >
                    <Navbar2 isLoggedIn={true} userName={prenom} />
                </Container>
                <p className='ms-4 mt-3'>Bienvenue sur les photos et vidéos de la MAM</p>
                <Footer />
            </div>
        </UserContext.Provider >
    );
}

export default Medias;