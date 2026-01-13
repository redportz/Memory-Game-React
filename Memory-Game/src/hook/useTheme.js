import React from "react";

export function useTheme() {

    // Dark Mode State
    const [darkMode, setDarkMode] = React.useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

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

    return { darkMode, setDarkMode };
}