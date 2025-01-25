import * as React from "react";
const BlogIcon = ({theme}) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
     
  >
    <path
      d="M38 10V38H10V10H38ZM42 6H6V42H42V6ZM34 34H14V32H34V34ZM34 30H14V28H34V30ZM34 24H14V14H34V24Z"
      fill={`${theme === 'dark'? 'white': 'black'}`}
    />
  </svg>
);
export default BlogIcon;
