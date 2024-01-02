import React, { useState } from "react";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Main from "./components/UI/Main";
import GameBoard from "./components/UI/GameBoard";

function App() {
  const [darkMode, setDarkMode] = useState(false); // State to manage dark mode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen p-4 flex flex-col justify-between ${
        darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-200 text-blue-900"
      } `}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <Main />

      <GameBoard />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
