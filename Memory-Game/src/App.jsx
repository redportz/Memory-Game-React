import {Routes, Route, Navigate} from "react-router-dom";
import CategorySelect from "./CategorySelect/CategorySelect.jsx"
import GameBoard from "./GameBoard/GameBoard.jsx"
import Menu from "./settings/Menu.jsx"
import React from "react";

function App() {
  
  const [multiplayerMode, setMultiplayerMode] = React.useState(false)

  return (
    <Routes>
      <Route path = "/" element={
        <div className="home"> 
          <Menu multiplayerMode={multiplayerMode} setMultiplayerMode={setMultiplayerMode}/>
          <CategorySelect/>
      </div>} />
      <Route path="/game/:category" element={
        <GameBoard multiplayerMode={multiplayerMode} />} />
      <Route pat="*" element={
        <Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
