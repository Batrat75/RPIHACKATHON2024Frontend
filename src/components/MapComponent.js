// src/components/MapComponent.js
import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// Container style for the map
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const mapStyles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ color: "#e9e5dc" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }, { lightness: 20 }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#ffcc00" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#ffbf00" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#a2daf2" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
  stylers: [{ color: "#89A203" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#e6f1e6" }],
  },
];

// Default map center (e.g., New York City)
const center = {
  lat: 40.7128,
  lng: -74.0060,
};

const MapComponent = ({ userLocation }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB_blpsMP6-rJyISpkDLduIaqbYfZAp3LA", // Replace with your actual key
  });

  // State to store the marker's position
  const [markerPosition, setMarkerPosition] = useState(userLocation || center);

  if (!isLoaded) return <div>Loading Map...</div>;

  // Function to handle click and set a new marker
  const handleMapClick = (event) => {
    setMarkerPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={userLocation || center}
      zoom={12}
      options={{
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
      }}
      onClick={handleMapClick} // Adding the onClick event
    >
      {/* Marker at the current location or default center */}
      <Marker position={markerPosition} />
    </GoogleMap>
  );
};

export default MapComponent;
