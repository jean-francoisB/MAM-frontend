import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {Container} from 'reactstrap';

import Navbar2 from '../components/NavBar2';
import Footer from '../components/Footer';


function Login() {



   const buttonStyles = {
      backgroundColor: "#DCECD4",
      borderColor: 'white',

   }

   const bodyStyles = {
      backgroundColor: "#FCE8FF",
      textColor: 'dark',
   }

   return (
      <div>
         <div className='d-flex flex-wrap justify-content-center' style={bodyStyles}>
         <Container className='mw-100 p-0' >
            <Navbar2 />
         </Container>
      <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Adresse mail</Form.Label>
         <Form.Control type="email" placeholder="Adresse mail" />
         
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Mot de passe</Form.Label>
         <Form.Control type="password" placeholder="Mot de passe" />
         </Form.Group>
         
         <Button style={buttonStyles} type="submit" className='mb-3 text-dark'>
         Connexion
         </Button>
      </Form>


      
         </div>
      <Footer />
      </div>
   )
   }

export default Login;