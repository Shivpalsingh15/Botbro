import * as React from "react";
const HamburgerIcon = ({theme}) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
     
  >
    <path
      d="M2.25 13.5V12H15.75V13.5H2.25ZM2.25 9.75V8.25H15.75V9.75H2.25ZM2.25 6V4.5H15.75V6H2.25Z"
      fill={`${theme === 'dark'? 'white': 'black'}`}
    />
  </svg>
);
export default HamburgerIcon;
