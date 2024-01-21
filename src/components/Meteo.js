import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    state = {
        weatherData: null
    }

    componentDidMount() {
        const cityName = 'Saint-Pierre-du-Perray'; 
        const apiKey = process.env.REACT_APP_API_KEY; 

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&lang=fr&units=metric`)
            .then(response => {
                // Stocker les données météorologiques dans l'état
                this.setState({ weatherData: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { weatherData } = this.state;

        if (!weatherData) {
            return <div>Chargement en cours...</div>;
        }

        const currentTemperature    = Math.round(weatherData.list[0].main.temp);
        const minTemperature        = Math.round(weatherData.list[0].main.temp_min);
        const maxTemperature        = Math.round(weatherData.list[0].main.temp_max);
        const weatherIcon           = `http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
        const updatedAt             = (weatherData.list[0].dt_txt);
        const description           = (weatherData.list[0].weather[0].description);

        return (
            <div className=''>
                <h4>{weatherData.city.name}</h4>
                <div className='d-flex justify-content-center'>
                    <img className='align-item-center' src={weatherIcon} alt={weatherData.list[0].weather[0].description}style={{ width: '120px', height: 'auto' }}/>
                </div>
                <p className='text-center'>{description}</p>
                <p>T actuelle   : {currentTemperature}°C</p>
                <p>T min        : {minTemperature}°C</p>
                <p>T max        : {maxTemperature}°C</p>
                <p>MAJ          : {updatedAt}</p>
            </div>
        );
    }
}

export default Weather;
