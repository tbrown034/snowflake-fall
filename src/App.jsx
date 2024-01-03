import React, { useState } from "react";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Main from "./components/UI/Main";
import GameBoard from "./components/UI/GameBoard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  const backToStart = () => {
    setGameStarted(false);
  };

  return (
    <div
      className={`min-h-screen p-4 flex flex-col justify-between transition-colors duration-300 ${
        darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-200 text-blue-900"
      }`}
    >
      <Header onToggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />
      {gameStarted ? (
        <GameBoard onBackToStart={backToStart} isDarkMode={darkMode} />
      ) : (
        <Main onStartGame={startGame} isDarkMode={darkMode} />
      )}
      <Footer />
    </div>
  );
}

export default App;
