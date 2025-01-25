import * as React from "react";
const EventIcon = ({theme}) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
     
  >
    <path
      d="M15 27V25H33V27H15ZM15 35V33H27V35H15ZM8 42V10H14.77V5.54004H16.924V10H31.232V5.54004H33.232V10H40V42H8ZM10 40H38V21.232H10V40Z"
      fill={`${theme === 'dark'? 'white': 'black'}`}
    />
  </svg>
);
export default EventIcon;
