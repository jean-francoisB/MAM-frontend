// import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';


// const homeCarousel = [
//   {
//     title: "Nos activités",
//     text: "Nous proposons a nos enfants différents thèmes tout au long de l'année où tout le monde participe",
//     button: "En savoir plus",
//     url: "/pedagogie",
//     img: './try1.jpg'
//   },
//   {
//     title: "On s'amuse",
//     text: "Nous proposons a nos enfants différents thèmes tout au long de l'année où tout le monde participe",
//     button: "En savoir plus",
//     url: "/pedagogie",
//     img: './try2.jpg'
//   },
//   {
//     title: "Notre groupe",
//     text: "Nous proposons a nos enfants différents thèmes tout au long de l'année où tout le monde participe",
//     button: "En savoir plus",
//     url: "/pedagogie",
//     img: './try3.jpg'
//   }
// ]



function Slider() {

  const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        fetch("https://127.0.0.1:8000/api/carousels/")
        .then((response) => response.json())
        .then((data) => setCarouselData(data["hydra:member"]))
        .catch((error) => {
            console.log(error);
        });
    }, []);



  return (
    <Carousel fade interval={null} className="slider order-3 order-md-2 order-md-1">
{
    carouselData.map((carousel) => (
    <Carousel.Item key={carousel.id} className='d-md-flex align-items-center w-100' >
        <img className='w-100 w-md-50'
        src={carousel.imageName}
        alt={carousel.titre}
        />
        <div className='w-100 w-md-50 bg-warning text-center' >
            <h3>{carousel.titre}</h3>
            <p>{carousel.texte}</p>
            <button type="button" className="btn btn-primary">En savoir plus</button>
        </div>
    </Carousel.Item>
    ))
}
</Carousel>


  )
}

// ********* Pour que le slider ne s'affiche que sur la page d'accueil et pas les autres


// import { useLocation } from 'react-router-dom';

// function Slider() {
//   let location = useLocation();

//   if (location.pathname !== '/') {
//     return null;
//   }

//   return (
//     // <Carousel>
//   );
// }

export default Slider; 

