import * as React from "react";
const Pdficon = ({theme}) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 48 48"
    fill={`${theme === 'light'? 'white': 'black'}`}
    xmlns="http://www.w3.org/2000/svg"
     
  >
    <path
      d="M9.996 18V2H39L46 9V46H8M36 2V12H46M33 38V24H41M33 31H39M6 24H9C13 24 13.5 26.5 13.5 28C13.5 29.5 13 32 9 32H6.5V36H6V24ZM19 36V24H22.41C24.684 24 27 25 27 30C27 35 24.684 36 22.41 36H19Z"
      stroke={`${theme === 'light'? 'black': 'white'}`}
      strokeWidth={4}
    />
  </svg>
);
export default Pdficon;
