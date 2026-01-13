import MultiplayerSwitch from "./Multiplayer_switch/Multiplayer_switch.jsx"
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import './Menu.css';
import DifficultySelect from './DifficultySelect/DifficultySelect.jsx';
import DarkModeSwitch  from "./DarkMode_switch/DarkMode_switch.jsx";

function Menu({multiplayerMode, setMultiplayerMode,difficulty, setDifficulty, inGame, darkMode, setDarkMode}) {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);


  return (
    <>
      
      {/* Menu button */}
      <div className="menu-fab">
      <button
        className="menu-btn"
        onClick={() => setMenuIsOpen(prev => !prev)}
        aria-label="Open Menu"
        >
        <FontAwesomeIcon icon={faBars} />
      </button>
      </div>



      {/* Overlay (click to close) */}
      {menuIsOpen && (
        <div className="menu-overlay" onClick={() => setMenuIsOpen(false)}>
          {/* STOP click from closing when you click inside panel */}
          <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setMenuIsOpen(false)}
              aria-label="Close Menu"
              >
              <FontAwesomeIcon icon={faRectangleXmark} />
            </button>

              <h3 className="settings-header">Settings</h3>
            <ul className="menu-options">

              <li>
                {/* Dark Mode Switch */}
                <DarkModeSwitch
                darkMode={darkMode}
                setDarkMode={setDarkMode} />

              </li>

              {!inGame ? (
                <li>
                  <MultiplayerSwitch
                    multiplayerMode={multiplayerMode}
                    setMultiplayerMode={setMultiplayerMode}
                  />
                </li>
              ) : null}


              {!inGame ? (
                <li>
                  <DifficultySelect
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                  />
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}


export default Menu