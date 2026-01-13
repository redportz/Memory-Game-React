import React from "react";
import "./DarkMode_switch.css";

function DarkModeSwitch() {
  const [darkMode, setDarkMode] = React.useState(false);

  // Load saved theme once
  React.useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDarkMode(saved === "dark");
  }, []);

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
