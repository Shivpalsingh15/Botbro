import * as React from "react";
const DashboardIcon = ({theme}) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
     
  >
    <path
      d="M26 18V6H42V18H26ZM6 26V6H22V26H6ZM26 42V22H42V42H26ZM6 42V30H22V42H6Z"
      fill={`${theme === 'dark'? 'white': 'black'}`}
    />
  </svg>
);
export default DashboardIcon;
