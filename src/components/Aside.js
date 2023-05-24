import React, { useState, useEffect } from 'react';

import DOMPurify from 'dompurify';


import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Meteo from './Meteo'




//************************************************************/
// INFOS POUR METEO 

// Installer AXIOS

// adresse API :  https://api.openweathermap.org/data/2.5/weather?q=saint-pierre-du-perray&appid=b0bd7afafb37ea1b2c4c9da8a9cd1fe1&lang=fr&units=metric

// temps    : weather.main
// TempMin  : main.temp_min
// TempMax  : main.temp_max

//********************************************************** */



function Aside() {
  const [liensData, setLiensData] = useState([]);
  const [infoData, setInfoData] = useState([]);
  const [texteData, setTexteData] = useState([]);

  const styles = {
    backgroundColor: "#FFF69A",
    textColor: 'dark',
  }

  const bodyStyles = {
    backgroundColor: "#FCE8FF",
    textColor: 'dark',
  }

  useEffect(() => {
    fetch("https://127.0.0.1:8000/api/liens_utiles/")
      .then((response) => response.json())
      .then((data) => setLiensData(data["hydra:member"]))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://127.0.0.1:8000/api/informations/")
      .then((response) => response.json())
      .then((data) => setInfoData(data["hydra:member"]))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://127.0.0.1:8000/api/homes/")
      .then((response) => response.json())
      .then((data) => setTexteData(data["hydra:member"]))
      .catch((error) => {
        console.log(error);
      });
  }, []);


  // <div>
  // {liensData.map((LiensUtiles) => (
  //     <div key={LiensUtiles.id}>
  //    
  //         <h2>{LiensUtiles.nom}</h2>
  //         <p>{LiensUtiles.url}</p>
  //     </div>
  // ))}
  // </div>

  return (
    <div className='aside d-flex flex-column flex-md-row order-2'>
      <Nav defaultActiveKey="/home" className="flex-column w-100 w-md-30 order-2 order-md-2" >

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Informations</Card.Title>
            {infoData.filter((info) => info.isActive).map((info) => (
              <div key={info.id}>
                {info.texte}
              </div>))}
          </Card.Body>
        </Card>

        <Card className='d-md-flex' style={{ width: '18rem', backgroundColor: styles.backgroundColor }}>
          <Card.Body>
            <Card.Title>Liens utiles</Card.Title>
            {liensData.map((LiensUtiles) => (
              <Card.Link key={LiensUtiles.id} href={LiensUtiles.url} >
                {LiensUtiles.nom}
              </Card.Link>))
            }

          </Card.Body>
        </Card>
        {/* <Nav className='w-100 d-md-w30'>Liens utiles</Nav>
        <Nav.Link href="https://www.pajemploi.urssaf.fr/" eventKey="pajemploiLink">Pajemploi</Nav.Link>
        <Nav.Link href="https://www.caf.fr/" eventKey="cafLink">Caf</Nav.Link>
        <Nav.Link href="https://monenfant.fr/" eventKey="monenfant">Monenfant.fr</Nav.Link> */}

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Météo du jour</Card.Title>

            <Meteo />

          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Météo signée</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">nom des signes</Card.Subtitle>
            <Card.Text>
              Emplacement du gif
            </Card.Text>
          </Card.Body>
        </Card>

      </Nav>
      {/* Penser a mettre de la marge */}
      <div className='col-md-10 order-1 order-md-3' style={{ backgroundColor: bodyStyles.backgroundColor }}>
        {texteData.filter((item) => item.isActive).map((item) => (
          <div key={item.id}>
            {/* <div dangerouslySetInnerHTML={{__html: item.texte}} /> */}
            <div className='p-15 m-4 col-10' style={{textAlign:'justify'}} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.texte) }} />

            <div className='m-4'>
              {item.signature}
            </div>
          </div>

        ))}

      </div>

    </div>
  );
}

export default Aside;