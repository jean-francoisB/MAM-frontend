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
               <div className="col-8 ms-4">
                  <p>Nous sommes 4 assistantes mat</p>
                  <div className='col-4'>
                     <img src="/public/picto-eveil-sens.jpg"></img>
                  </div>
               </div>
            </div>
            {/* { isLogged ?  <div className="media"></div> : 'pas connecté'
            
            } */}
            
         </div>
         <Footer />
      </div>
   )
}

export default Qui;