import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const LocationsPage = () => {
  // Define the map container size
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  // Define center for the map
  const center = {
    lat: 12.8700, 
    lng: 74.8561, 
  };

  // Define locations with GPS coordinates
  const locations = [
    { name: 'Ideal Café - Mangalore City Centre', lat: 12.8700, lng: 74.8561 },
    { name: 'Ideal Café - PVS Circle', lat: 12.8641, lng: 74.8449 },
    { name: 'Ideal Café - Kottara Chowki', lat: 12.8697, lng: 74.8695 },
    { name: 'Ideal Café - Hampankatta', lat: 12.8704, lng: 74.8507 },
  ];

  return (
    <div className="p-5">
      <h1>Our Locations</h1>
      <p>Visit us at various branches across Mangalore. More locations coming soon!</p>

      <div>
        <h2>Current Locations:</h2>
        <ul>
          {locations.map((location, index) => (
            <li key={index}>
              <strong>{location.name}</strong>
              <p>GPS: {location.lat}° N, {location.lng}° E</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Google Map Section */}
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          {locations.map((location, index) => (
            <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>

      <div>
        <h3>More locations coming soon!</h3>
      </div>
    </div>
  );
};

export default LocationsPage;
