import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React Profile Card</h1>

      <ProfileCard
        name="Daksh Parashar"
        role="MERN Stack Intern"
        skill="ReactJS Developer"
      />
    </div>
  );
}

export default App;