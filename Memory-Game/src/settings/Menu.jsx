import MultiplayerSwitch from "./Multiplayer_switch/Multiplayer_switch.jsx"
import './Menu.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

function Menu({multiplayerMode, setMultiplayerMode}) {
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
                <MultiplayerSwitch
                  multiplayerMode={multiplayerMode}
                  setMultiplayerMode={setMultiplayerMode}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}


export default Menu