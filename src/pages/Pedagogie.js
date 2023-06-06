import React from 'react';


import {Container} from 'reactstrap';

import Navbar2 from '../components/NavBar2';
import Footer from '../components/Footer';




function Pedagogie() {

  const categories = [
    {
      label: "Projet",
      id: "projet",

    },
    {
      label: "Activités",
      id: "activites",
    },
    {
      label: "Festivités",
      id: "festivites",
    },
    {
      label: "Sorties",
      id: "sorties",
    },
    {
      label: "Bonus",
      id: "bonus",
    },
  ]



  const bodyStyles = {
    backgroundColor: "#FCE8FF",
    textColor: 'dark',
  }

  const buttonStyles = {
    backgroundColor: "#DCECD4",
    textColor: 'dark',
    borderColor: 'white',
  }



  return (
    <div style={bodyStyles}>
        <Container className='mw-100 p-0' >
      <Navbar2 />
      </Container>
      <div className=' d-md-flex w-100 justify-content-around mt-4'>

        {categories.map((item) => (
          <a href={`#${item.id}`} style={buttonStyles} type="button" class="btn btn-default btn-lg">{item.label}</a>
        ))
        }

      </div>
      {categories.map((item) => (

        <div className="ms-4 mt-3" id={item.id} style={{ height: "300px" }}>
          
          <h2>{item.label}</h2>
          <p>Vous êtes dans la catégorie {item.id}</p>
        </div>

      ))}
      <Footer />
    </div >



  )
}

export default Pedagogie;