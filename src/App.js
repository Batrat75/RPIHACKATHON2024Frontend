// src/App.js
import React, { useState, useEffect } from "react";
import MapComponent from "./components/MapComponent";
import PickupRequest from "./components/PickupRequest";

function App() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        alert("Location access denied or unavailable.");
      }
    );
  }, []);

  const handlePickupRequestSubmit = (request) => {
    console.log("Pickup Request:", request);
  };

  return (
    <div className="App">
      <h1>SmartTrash App</h1>
      <MapComponent userLocation={userLocation} />
      <PickupRequest userLocation={userLocation} onSubmit={handlePickupRequestSubmit} />
    </div>
  );
}

export default App;
