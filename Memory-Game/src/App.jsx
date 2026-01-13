import {Routes, Route, Navigate} from "react-router-dom";
import CategorySelect from "./CategorySelect/CategorySelect.jsx"
import GameBoard from "./GameBoard/GameBoard.jsx"
import Menu from "./settings/Menu.jsx"
import React from "react";

function App() {
  
  const [multiplayerMode, setMultiplayerMode] = React.useState(false)
  const [difficulty, setDifficulty] = React.useState("beginner")
  const [inGame, setInGame] = React.useState(false)


  const [darkMode, setDarkMode] = React.useState(() => {
      return localStorage.getItem("theme") === "dark";
    });
  
    // Save theme whenever it changes
    React.useEffect(() => {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

      // Apply theme to <html>
      React.useEffect(() => {
        document.documentElement.setAttribute(
          "data-theme",
          darkMode ? "dark" : "light"
        );
      }, [darkMode]);



  return (
    <Routes>
      <Route path = "/" element={
        <div className="home"> 
          <Menu 
            multiplayerMode={multiplayerMode} 
            setMultiplayerMode={setMultiplayerMode} 
            difficulty={difficulty} 
            setDifficulty={setDifficulty}
            darkMode={darkMode}
            setDarkMode={setDarkMode} />
          <CategorySelect
            difficulty={difficulty} />
      </div>} />
      <Route path="/game/:category/:difficulty" element={
        <>
        <Menu
          inGame={inGame}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <GameBoard 
          multiplayerMode={multiplayerMode} 
          inGame={inGame}
          setInGame={setInGame} />
          </>
          } 
          />
      <Route path="*" element={
        <Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
