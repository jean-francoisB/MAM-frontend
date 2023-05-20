/***************************************************************
 * MAP
 * 
 * La latitude de 1 Rue Danielle Casanova est 48.6128999,
 *  et la longitude est 2.5066131.
 *  1 Rue Danielle Casanova est situé à Saint-Pierre-du-Perray,
 *  avec les coordonnées gps 48° 36' 46.4396" N and 2° 30' 23.8072" E.
 * 
 * installation : npm install react-leaflet leaflet
 * 
 
 * 
 ******************************************************************/

import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function Map() {
  return (
    <MapContainer
      center={[48.6128, 2.5066]}
      zoom={10}
      style={{ height: '150px', width: '150px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <Marker position={[48.6128, 2.5066]} />
    </MapContainer>
  );
};

export default Map;
