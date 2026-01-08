import React from 'react';
import { replace, useNavigate } from "react-router-dom";

function Multiplayer_switch(){

    const [multiplayer, setMultiplayer] = React.useState(false)

    const handleMultiplayerToggle = () => {
        setMultiplayer((prev) => !prev);
    }

    return(
        <div className='multiplayer-container'>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <input 
                type="checkbox"
                checked={multiplayer}
                onChange={handleMultiplayerToggle}
                style={{display:"none"}}
                 />
                 <p>Multiplayer:&nbsp;</p>
        <span
          style={{
            width: "50px",
            height: "25px",
            background: multiplayer ? "#4caf50" : "#ccc",
            borderRadius: "25px",
            position: "relative",
            transition: "background 0.3s"
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "2px",
              left: multiplayer ? "26px" : "2px",
              width: "21px",
              height: "21px",
              background: "#fff",
              borderRadius: "50%",
              transition: "left 0.3s"
            }}
          ></span>
            </span>
            </label>
        </div>
    )
};

export default Multiplayer_switch