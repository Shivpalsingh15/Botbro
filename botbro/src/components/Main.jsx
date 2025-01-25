"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ReduxProvider from "@/components/ReduxProvider"; // Import the client-side ReduxProvider
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { useSelector } from "react-redux";
import ThemeProvider from "@/components/ThemeProvider";

function Main({ children }) {
  const { showSideBar } = useSelector((store) => store.dashboard);
  console.log("showSideBar:", showSideBar);
  return (
    <ThemeProvider>

    
    <div className="  lg:h-screen lg:grid lg:grid-cols-16 lg:w-full bg-tertiaryBgColor dark:bg-darkModeTertiaryBgColor text-blackPrimaryText dark:text-darkModeBlackPrimaryText text-[Lexend Giga]">
      {/* Sidebar */}
      <div
        className={`${
          showSideBar ? "fixed w-[70%] " : "sm:hidden"
        }   lg:col-start-1 lg:col-end-2  h-screen md: block lg:block  bg-secondaryBgColor dark:bg-darkModeSecondaryBgColor`}
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="lg:col-start-2 lg:col-end-17 lg:grid lg:grid-rows-12 lg:h-screen">
        {/* Navbar */}
        <div className=" lg:row-start-1 lg:row-end-2 ">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className=" dark:bg-darkModePrimaryBgColor lg:row-start-2 lg:row-end-12  overflow-y-scroll p-4">
          {children}
        </div>

        {/* Footer */}
        <div className=" lg:row-start-12 lg:row-end-13 h-full bg-secondaryBgColor dark:bg-darkModeSecondaryBgColor">
          <Footer />
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Main;
