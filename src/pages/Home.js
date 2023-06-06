import React from 'react';


import { Container } from 'reactstrap';

import Navbar2 from '../components/NavBar2';
import Slider from '../components/Slider';
import Aside from '../components/Aside';
import Footer from '../components/Footer';


function Home() {
   return (
      <div className='text-dark d-flex flex-column'>

         <Container className='mw-100 p-0 order-1' >
            <Navbar2 />
         </Container>
         <Slider />
         <Aside />
         <Footer />



      </div>
   )
}

export default Home;