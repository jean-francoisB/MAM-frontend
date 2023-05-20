import React from 'react';

import {Container} from 'reactstrap';

import Navbar2 from '../components/NavBar2';
import Footer from '../components/Footer';


function Modalites() {


   
   const bodyStyles = {
      backgroundColor: "#FCE8FF",
      textColor: 'dark',
   }
    return (
     
      
       <div style={{ backgroundColor: bodyStyles.backgroundColor }}>
         <Container className='mw-100 p-0' >
      <Navbar2 />
      </Container>
        <p>Texte</p>
        <Footer />
       </div>
    )
   }

export default Modalites;