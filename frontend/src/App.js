import React, { useState } from "react";
import axios from "axios";
import GameUI from "./components/GameUI";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-blue-600">
        GeoGuessr Ethiopia
      </h1>
      <GameUI />
    </div>
  );
}




  

export default App;
