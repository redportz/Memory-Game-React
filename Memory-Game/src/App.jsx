import {Routes, Route, Navigate} from "react-router-dom";
import CategorySelect from "./CategorySelect/CategorySelect.jsx"
import GameBoard from "./GameBoard/GameBoard.jsx"
import Menu from "./settings/Menu.jsx"
function App() {

  return (
    <Routes>
      <Route path = "/" element={<><CategorySelect/> <Menu/></>} />
      <Route path="/game/:category" element={<GameBoard />} />
      <Route pat="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
