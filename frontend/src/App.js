import React, { useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState(null);

  const fetchLocation = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/random-location/");
    setLocation(res.data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">GeoGuessr Ethiopia</h1>
      <button
        onClick={fetchLocation}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
      >
        Show Random Location
      </button>
      {location && (
        <div className="mt-8 text-center">
          <img
            src={`http://127.0.0.1:8000${location.image}`}
            alt={location.name}
            className="rounded-lg shadow-md w-96 h-64 object-cover"
          />
          <h2 className="text-xl mt-4 font-semibold">{location.name}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
