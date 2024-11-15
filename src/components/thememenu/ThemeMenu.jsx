import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ThemeAction from "../../redux/actions/ThemeAction";

const ThemeMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();

  // Check localStorage for saved theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"; // Default to 'light'
    setIsDarkMode(savedTheme === "dark");
  }, []);

  // Apply the theme to the body
  useEffect(() => {
    const themeClass = isDarkMode ? "theme-mode-dark" : "theme-mode-light";
    document.body.className = themeClass; // Set the class on the body to apply the theme
    localStorage.setItem("theme", isDarkMode ? "dark" : "light"); // Save the theme preference
    dispatch(ThemeAction.setMode(themeClass)); // Dispatch to Redux (if you're using it)
  }, [isDarkMode, dispatch]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="topnav__right-item" onClick={toggleTheme}>
      <button className="theme-toggle-button">
        <i className={isDarkMode ? "bx bx-sun" : "bx bx-moon"}></i>
        {/* Sun for dark mode, Moon for light mode */}
      </button>
    </div>
  );
};

export default ThemeMenu;
