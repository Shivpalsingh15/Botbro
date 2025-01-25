"use client";

import { setShowSideBar } from "@/redux/dashboardSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TlcIcon from "@/public/sidebarIcons/TlcIcon";
import AboutIcon from "@/public/sidebarIcons/AboutIcon";
import BlogIcon from "@/public/sidebarIcons/BlogIcon";
import ContactIcon from "@/public/sidebarIcons/ContactIcon";
import DashboardIcon from "@/public/sidebarIcons/DashboardIcon";
import EventIcon from "@/public/sidebarIcons/EventIcon";
import FAQIcon from "@/public/sidebarIcons/FAQIcon";
import FounderIcon from "@/public/sidebarIcons/FounderIcon";
import LegalIcon from "@/public/sidebarIcons/LegalIcon";
import Pdficon from "@/public/sidebarIcons/Pdficon";
import PlanIcon from "@/public/sidebarIcons/PlanIcon";
import QuestionIcon from "@/public/sidebarIcons/QuestionIcon";
import TestimonialsIcon from "@/public/sidebarIcons/TestimonialsIcon";

function Sidebar() {
  const { showSideBar, theme } = useSelector((store) => store.dashboard);
  const dispatch = useDispatch();

  const allIcons = [
    {
      icon: <TlcIcon theme={theme}/>,
      title: "TLC Coin",
    },
    {
      icon: <AboutIcon theme={theme}/>,
      title: "About",
    },
    {
      icon: <BlogIcon theme={theme}/>,
      title: "Blog",
    },
    {
      icon: <ContactIcon theme={theme}/>,
      title: "Contact",
    },
    {
      icon: <DashboardIcon theme={theme}/>,
      title: "Dashboard",
    },
    {
      icon: <EventIcon theme={theme}/>,
      title: "Event",
    },
    {
      icon: <FAQIcon theme={theme}/>,
      title: "FAQ",
    },
    {
      icon: <FounderIcon theme={theme}/>,
      title: "Founder",
    },
    {
      icon: <LegalIcon theme={theme}/>,
      title: "Legal",
    },
    // {
    //   icon: <Pdficon theme={theme}/>,
    //   title: "PDF",
    // },
    {
      icon: <PlanIcon theme={theme}/>,
      title: "Plan",
    },
    {
      icon: <QuestionIcon theme={theme}/>,
      title: "Questions",
    },
    {
      icon: <TestimonialsIcon theme={theme}/>,
      title: "Testimonials",
    },
  ];


  const info = (el)=>{
  console.log('el:', el)

  }
  return (
    <div className="h-full  sm:overflow-y-scroll lg:overflow-y-auto">
      <div></div>
      <div
        className="lg:hidden"
        onClick={() => dispatch(setShowSideBar(!showSideBar))}
      >
        close
      </div>
      <div className="flex flex-col justify-between items-center h-full text-[10px]">
        {allIcons.map((el, i) => (
          <div onClick={()=>info(el)} key={i} className="flex justify-center flex-col  hover:bg-primaryBgColor h-10 items-center w-full cursor-pointer">
            <span>{el.icon}</span>
            <b>{el.title}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
