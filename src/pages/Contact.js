import React from 'react';
import Form  from 'react-bootstrap/Form';
import Map from '../components/Map';

import emailjs from 'emailjs-com';

import {Container,Button} from 'reactstrap';


import Navbar2 from '../components/NavBar2';
import Footer from '../components/Footer';

emailjs.init('-LB88smF2B-HlXe-j');

function Contact() {



   const buttonStyles = {
      backgroundColor: "#DCECD4",
      textColor: 'dark',
      borderColor: 'white',
   }

   const bodyStyles = {
      backgroundColor: "#FCE8FF",
   }

   const choices = [
      {
         day: "Lundi",
         id : "monday"
      },
      {
         day: "Mardi",
         id : "tuesday"
      },
      {
         day: "Mercredi",
         id : "wednesday"
      },
      {
         day: "Jeudi",
         id : "thursday"
      },
      {
         day: "Vendredi",
         id : "friday"
      }
   ]

   function sendEmail(e) {
      e.preventDefault();
   
      emailjs.sendForm('service_psq5zsf', 'template_2n7utzi', e.target, '-LB88smF2B-HlXe-j')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
   }


   return (

      <div  style={{ backgroundColor: bodyStyles.backgroundColor }}>
         <Container className='mw-100 p-0' >
      <Navbar2 />
      </Container>
         <Form className="flex-wrap col-6" onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label>Nom</Form.Label>
               <Form.Control type="last_name" placeholder="Nom" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label>Prénom</Form.Label>
               <Form.Control type="first_name" placeholder="Prénom" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label>Email</Form.Label>
               <Form.Control type="email" placeholder="nom@exemple.com"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label>Téléphone</Form.Label>
               <Form.Control type="phone" placeholder="Téléphone"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label>Ville</Form.Label>
               <Form.Control type="city" placeholder="Ville" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label>Date de naissance/Date du terme</Form.Label>
               <Form.Control type="date" placeholder="Date de naissance ou Date du terme"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label>Date de début d'accueil</Form.Label>
               <Form.Control type="date" placeholder="Date de début d'accueil"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Message</Form.Label>
               <Form.Control as="textarea" placeholder="Message" rows={3}  />
            </Form.Group>
            <Form.Select className="mb-3" aria-label="Default select example">
               <option>Comment vous nous avez connu ?</option>
               <option value="1">Bouche à oreille</option>
               <option value="2">Internet</option>
               <option value="3">Mairie</option>
               <option value="4">Facebook</option>
               <option value="5">Autre</option>
            </Form.Select>
            <div className="mb-3 ms-3">
               {choices.map((item) => (
                  <div>
                     <input type='time' />
                     <input id={item.id} type="checkbox" /> <label htmlFor={item.id}>{item.day}</label>
                     <input type='time' />
                  </div>
               ))}
               
            </div>
            <Button style={{buttonStyles}} type="submit">Envoyer</Button>
         </Form>
         <div>
            {/* <Map/> */}
         </div>
         <Footer />
      </div>
   )
}

export default Contact;

// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Map from '../components/Map';
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'


// import Navbar2 from '../components/NavBar2';
// import Footer from '../components/Footer';

// function Contact() {


//    const bodyStyles = {
//       backgroundColor: "#FCE8FF",
//    }

//    const choices = [
//       {
//          day: "Lundi",
//          id: "monday"
//       },
//       {
//          day: "Mardi",
//          id: "tuesday"
//       },
//       {
//          day: "Mercredi",
//          id: "wednesday"
//       },
//       {
//          day: "Jeudi",
//          id: "thursday"
//       },
//       {
//          day: "Vendredi",
//          id: "friday"
//       }
//    ]
//    return (

//       <div className='d-md-flex' style={{ backgroundColor: bodyStyles.backgroundColor }}>
//          <div className='col-md-4'>
//             <Map/>
//          </div>
//          <Form className='col-md-8 px-3'>
//             <div className='d-md-flex'>
//                <Form.Group className="col-md-6 pe-3 mb-3" controlId="exampleForm.ControlInput1">
//                   <Form.Label>Nom</Form.Label>
//                   <Form.Control type="text" placeholder="Nom" />
//                </Form.Group>
//                <Form.Group className="col-md-6  mb-3" controlId="exampleForm.ControlInput1">
//                   <Form.Label>Prénom</Form.Label>
//                   <Form.Control type="text" placeholder="Prénom" />
//                </Form.Group>
//             </div>
//             <div className='d-md-flex'>
//                <Form.Group className="col-md-6 pe-3 mb-3 " controlId="exampleForm.ControlInput1">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control type="email" placeholder="nom@exemple.com" />
//                </Form.Group>
//                <Form.Group className="col-md-6 mb-3 " controlId="exampleForm.ControlInput1">
//                   <Form.Label>Téléphone</Form.Label>
//                   <Form.Control type="phone" placeholder="Téléphone" />
//                </Form.Group>
//             </div>
//             <div className='d-md-flex'>
//                <Form.Group className="col-md-6 pe-3 mb-3" controlId="exampleForm.ControlInput1">
//                   <Form.Label>Code Postal</Form.Label>
//                   <Form.Control className='w-50' type="text" placeholder="Code Postal" />
//                </Form.Group>
//                <Form.Group className="col-md-6 mb-3 " controlId="exampleForm.ControlInput1">
//                   <Form.Label>Ville</Form.Label>
//                   <Form.Control type="text" placeholder="Ville" />
//                </Form.Group>
//             </div>
//             <div className='d-md-flex'>
//                <Form.Group className="col-md-6 pe-3 mb-3 " controlId="exampleForm.ControlInput1">
//                   <Form.Label>Date de naissance/Date du terme</Form.Label>
//                   <Form.Control className='w-50' type="date" placeholder="Date de naissance ou Date du terme" />
//                </Form.Group>
//                <Form.Group className="col-md-6 mb-3 " controlId="exampleForm.ControlInput1">
//                   <Form.Label>Date de début d'accueil</Form.Label>
//                   <Form.Control className='w-50' type="date" placeholder="Date de début d'accueil" />
//                </Form.Group>
//             </div>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                <Form.Label>Message</Form.Label>
//                <Form.Control as="textarea" placeholder="Tapez votre message ici" rows={3} />
//             </Form.Group>
//             <Form.Select className='mb-3 w-50' aria-label="Default select example">
//                <option>Comment nous avez-vous connu ?</option>
//                <option value="1">Bouche à oreille</option>
//                <option value="2">Internet</option>
//                <option value="3">Mairie</option>
//                <option value="4">Facebook</option>
//                <option value="5">Autre</option>
//             </Form.Select>
//             <div className=' container'>
//                {choices.map((item) => (
//                   <div className='row'>
//                      <div className='col '><input type='time' /></div>
//                      <div className='col'><input id={item.id} type="checkbox" /> <label htmlFor={item.id}>{item.day}</label></div>
//                      <div className='col'><input type='time' /></div>
//                   </div>
//                ))}

//             </div>
//             <div>
//                <button type='submit'>Envoyer</button>
//             </div>
//          </Form>


//       </div>
//    )
// }

// export default Contact;