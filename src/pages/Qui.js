import React from 'react';

import {Container} from 'reactstrap';

import Navbar2 from '../components/NavBar2';
import Footer from '../components/Footer';

function Qui() {

   //const {isLogged} = useContext(user)

   const bodyStyles = {
      backgroundColor: "#FCE8FF",
      textColor: 'dark',
   }


   return (
      <div style={{ backgroundColor: bodyStyles.backgroundColor }}>
      <Container className='mw-100 p-0' >
      <Navbar2 />
      </Container>
         <div>
         
            <div>
               TEXTE + PHOTO
            </div>
            {/* { isLogged ?  <div className="media"></div> : 'pas connecté'
            
            } */}
            
         </div>
         <Footer />
      </div>
   )
}

export default Qui;