import React, { useState, useContext } from 'react';
import { Container, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import Navbar2 from '../components/NavBar2';
import Footer from '../components/Footer';

import UserContext from '../_utils/UserContext';
import { useNavigate } from 'react-router-dom';



function LoginForm({ onLogin }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const { setPrenom } = useContext(UserContext);
    // const [error, setError] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = await getAuthToken(formData.email, formData.password);

        if (token) {
            onLogin(token);
            navigate("/medias"); // Redirection vers la page médias
        }else{
            setError("Email ou mot de passe incorrect.");
        }
    };

    const getAuthToken = async (email, password) => {
        const response = await fetch("https://127.0.0.1:8000/api/login_check", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
        });

        const data = await response.json();
        return data.token;
    };





    const buttonStyles = {
        backgroundColor: "#DCECD4",
        borderColor: 'white',
    };

    const bodyStyles = {
        backgroundColor: "#FCE8FF",
        color: 'dark',
    };

    return (
        <div>
            <div className='d-flex flex-wrap justify-content-center' style={bodyStyles}>
                <Container className='mw-100 p-0'>
                    <Navbar2 />
                </Container>
                <Form onSubmit={handleSubmit}>
                {error && <p className="text-danger">{error}</p>}
                    <FormGroup>
                        <Form.Label>Email :</Form.Label>
                        <FormControl
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Mot de passe :</Form.Label>
                        <FormControl
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </FormGroup>

                    <Button style={buttonStyles} type="submit" className='mt-3 mb-3 text-dark'>
                        Connexion
                    </Button>
                </Form>
            </div>
            <Footer />
        </div>
    );
}




function AppWithoutUse() {
    const [token, setToken] = useState('');
    const [prenom, setPrenom] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = async (token) => {
        setToken(token);
        const response = await fetch("https://127.0.0.1:8000/api/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        setPrenom(data.prenom);
        setIsLoggedIn(true);
    };

    const bodyStyles = {
        backgroundColor: "#FCE8FF",
        textColor: 'dark',
    }




    return (
        <UserContext.Provider value={prenom}>
            <div>
                {token ? (
                    <div style={{ backgroundColor: bodyStyles.backgroundColor }}>

                        <Navbar2 isLoggedIn={true} prenom={prenom} />

                        <p className='ms-4 mt-3'>Bienvenue sur les photos et vidéos de la MAM</p>
                        <Footer />
                    </div>
                ) : (
                    <LoginForm onLogin={handleLogin} />
                )}
            </div>
        </UserContext.Provider>
    );
}

export default AppWithoutUse;
