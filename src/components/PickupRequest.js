// src/components/PickupRequest.js
import React, { useState } from "react";
import axios from "axios";

const PickupRequest = ({ userLocation, onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRequestPickup = async () => {
    if (!userLocation) {
      alert("Unable to detect your location!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/request-pickup", {
        location: userLocation,
      });
      setMessage("Pickup request submitted successfully!");
      onSubmit(response.data);
    } catch (error) {
      setMessage("Error submitting request. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Request Trash Pickup</h2>
      <button onClick={handleRequestPickup} disabled={loading}>
        {loading ? "Requesting..." : "Request Pickup"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PickupRequest;
