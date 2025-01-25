"use client";

import { setShowSideBar, setTheme } from "@/redux/dashboardSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Darkmode from "@/public/layout/Darkmode";
import Lightmode from "@/public/layout/Lightmode";
import Pdficon from "@/public/sidebarIcons/Pdficon";

function Navbar() {
  const { showSideBar, theme } = useSelector((store) => store.dashboard);
  console.log("showSideBar:", showSideBar);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };
  return (
    <div className="flex  justify-center h-full items-center bg-secondaryBgColor dark:bg-darkModeSecondaryBgColor">
      <div
        className="md:hidden lg:hidden px-2"
        onClick={() => {
          dispatch(setShowSideBar(!showSideBar)), console.log("hii");
        }}
      >
        me
      </div>
      <div className="flex-grow   text-center ">Niruthi</div>
      <div onClick={toggleTheme}>
        {theme === "light" ? <Darkmode /> : <Lightmode />}
        {/* <p >{ theme === "light" ? "Dark Mode" : "Light Mode"}</p> */}
      </div>
      <div>
        <Pdficon theme={theme}/>
      </div>
    </div>
  );
}

export default Navbar;
