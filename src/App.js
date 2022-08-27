import React from "react";
import "./App.css";
import FirstClass from "./components/FirstClass";

import GridBoard from "./components/GridBoard";
import GridTriangle from "./components/GridTriangle";

function App() {
  return (
    <div className="apppp">
      <div className="App">
        <div className="App-grid">
          <div>
            <GridTriangle />
            <GridTriangle />
            <GridTriangle />
            <GridTriangle />
            <GridTriangle />
            <GridTriangle />
          </div>
          <GridBoard />
          <div>
            <GridTriangle />
            <GridTriangle />
            <GridTriangle />
            <GridTriangle />
            <GridTriangle />
            <GridTriangle />
          </div>
        </div>
      </div>
      <div className="jjj">
        <GridBoard />
        <GridBoard />
      </div>
    </div>
  );
}

export default App;
