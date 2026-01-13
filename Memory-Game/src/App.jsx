import {Routes, Route, Navigate} from "react-router-dom";
import CategorySelect from "./CategorySelect/CategorySelect.jsx"
import GameBoard from "./GameBoard/GameBoard.jsx"
import Menu from "./settings/Menu.jsx"
import React from "react";

function App() {
  
  const [multiplayerMode, setMultiplayerMode] = React.useState(false)
  const [difficulty, setDifficulty] = React.useState("beginner")
  const [inGame, setInGame] = React.useState(false)

  return (
    <Routes>
      <Route path = "/" element={
        <div className="home"> 
          <Menu 
            multiplayerMode={multiplayerMode} 
            setMultiplayerMode={setMultiplayerMode} 
            difficulty={difficulty} 
            setDifficulty={setDifficulty} />
          <CategorySelect
            difficulty={difficulty} />
      </div>} />
      <Route path="/game/:category/:difficulty" element={
        <>
        <Menu
          inGame={inGame}
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
