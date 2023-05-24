import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";


import { Container, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

import Navbar2 from '../components/NavBar2';
import Footer from '../components/Footer';


function Login() {

   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
   };

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
            <Form onSubmit={handleSubmit}>
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
   )
}

export default Login;