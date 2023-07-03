import React, { useState } from "react";

import Resume from "./Components/Resume";
import Welcome from "./Components/Welcome";
import "./App.css";
import Help from "./Components/Help";

const App = () => {

  const [welcomeMessage, setWelcomeMessage] = useState(true);

  const handleCloseWelcome = () => {
    setWelcomeMessage(false);
  }

  const handleOpenWelcome = () => {
    setWelcomeMessage(true);
  }

  return (
    <div className="app">
      <Resume />
      {welcomeMessage ? (<Welcome exit={handleCloseWelcome} />) : <Help open={handleOpenWelcome} />}
    </div>
  )
}

export default App;
