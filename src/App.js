import React, { useState } from "react";

import Resume from "./Components/Resume";
import Welcome from "./Components/Welcome";
import "./App.css";

const App = () => {

  const [welcomeMessage, setWelcomeMessage] = useState(true);

  const handleCloseWelcome = () => {
    setWelcomeMessage(false);
  }

  return (
    <div className="app">
      <Resume />
      {welcomeMessage ? (<Welcome onExit={handleCloseWelcome} />) : null}
    </div>
  )
}

export default App;
