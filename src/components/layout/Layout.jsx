import React, { useEffect, useState } from "react";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import Routes from "../Routes";

import { BrowserRouter, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "../thememenu/theme";
import Login from "../../pages/login";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the theme from localStorage if available
  useEffect(() => {
    const savedMode = localStorage.getItem("them");
    if (savedMode === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // Save the theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("themeMode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "light");

    const colorClass = localStorage.getItem("colorMode", "light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Route
          render={(props) => (
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
              <CssBaseline />
              <div
                className={`layout ${themeReducer.mode} ${themeReducer.color}`}
              >
                <Sidebar {...props} />
                <div className="layout__content">
                  <TopNav />
                  <div className="layout__content-main">
                    <Routes />
                  </div>
                </div>
              </div>
            </ThemeProvider>
          )}
        />
      </BrowserRouter>
    </>
  );
};

export default Layout;
