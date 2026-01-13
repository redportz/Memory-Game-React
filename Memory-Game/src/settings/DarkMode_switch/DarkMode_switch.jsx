import React from "react";
import "./DarkMode_switch.css";

function DarkModeSwitch({darkMode, setDarkMode}) {


  return (
    <div className="switch-container">
      <label className="switch-label">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode((prev) => !prev)}
          style={{ display: "none" }}
        />

        <p className="no-select">Dark Mode:&nbsp;</p>

        <span
          className="switch_background"
          style={{
            backgroundColor: darkMode
              ? "var(--switch-on-color)"
              : "var(--switch-off-color)",
          }}
        >
          <span
            className="switch_position_changer"
            style={{ left: darkMode ? "26px" : "2px" }}
          />
        </span>
      </label>
    </div>
  );
}

export default DarkModeSwitch;
