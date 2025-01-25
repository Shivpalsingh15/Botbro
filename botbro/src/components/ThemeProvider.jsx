'use client';

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 
const ThemeProvider = ({ children }) => {
   

  const {theme} = useSelector((store) => store.dashboard);
  console.log('theme:', theme)
 
  useEffect(() => {
    // Apply the theme to the root element
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  

  return (
    <div>
     
      {children}
    </div>
  );
};

export default ThemeProvider;
