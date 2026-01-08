import MultiplayerSwitch from "./Multiplayer_switch/Multiplayer_switch.jsx"
import './menu.css';
import React from 'react';
function Menu() {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    const handleMenuToggle = () => {
        setMenuIsOpen((prev) => !prev);
    }

    return(
        <div className="menu-container">
            <button className="menu-btn" aria-label="Open Menu">
                <i className="fa-solid fa-bars"></i>
              </button>
            <div className="overlay">
                    <button className="close-btn" aria-label="Close Menu" onClick={() => handleMenuToggle()}>
                        try me
                    </button>
                </div>
            {menuIsOpen ? (
                <p>Is Open</p>
            ) : null}

            <div className="menuItems">
                <MultiplayerSwitch />
            </div>
        </div>
    )
}

export default Menu