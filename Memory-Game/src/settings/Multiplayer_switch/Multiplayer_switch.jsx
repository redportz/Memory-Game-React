import React from 'react';
import { replace, useNavigate } from "react-router-dom";
import "./Multiplayer_switch.css";

function Multiplayer_switch({multiplayerMode, setMultiplayerMode}) {

    const handleMultiplayerToggle = () => {
        setMultiplayerMode((prev) => !prev);
    }

    return(
        <div className='multiplayer-container'>
            <label className='multiplayer-label' style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <input 
                type="checkbox"
                checked={multiplayerMode}
                onChange={handleMultiplayerToggle}
                style={{display:"none"}}
                 />
                 <p className='no-select'>Multiplayer:&nbsp;</p>
        <span className='multi_switch_background'
        style={multiplayerMode ? {backgroundColor: "#4caf50"} : {backgroundColor: "#ccc"}}
        >
          <span className='multi_switch_position_changer'
            style={{
              left: multiplayerMode ? "26px" : "2px"
            }}
          ></span>
            </span>
            </label>
        </div>
    )
};

export default Multiplayer_switch