import * as React from "react";
const LegalIcon = ({theme}) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
     
  >
    <path
      d="M23.9999 6C21.4599 6 19.1999 7.6 18.3599 10H5.99986V14H9.89986L3.99986 28C3.05986 32 5.99986 34 10.9999 34C15.9999 34 19.1199 32 17.9999 28L12.0999 14H18.3399C18.9999 15.7 20.2999 17 21.9999 17.66V40H3.99986V44H43.9999V40H25.9999V17.64C27.6999 17 28.9999 15.7 29.6399 14H35.8999L29.9999 28C29.0599 32 31.9999 34 36.9999 34C41.9999 34 45.1199 32 43.9999 28L38.0999 14H41.9999V10H29.6599C28.7999 7.6 26.5399 6 23.9999 6ZM23.9999 10C24.5303 10 25.039 10.2107 25.4141 10.5858C25.7892 10.9609 25.9999 11.4696 25.9999 12C25.9999 12.5304 25.7892 13.0391 25.4141 13.4142C25.039 13.7893 24.5303 14 23.9999 14C23.4694 14 22.9607 13.7893 22.5857 13.4142C22.2106 13.0391 21.9999 12.5304 21.9999 12C21.9999 11.4696 22.2106 10.9609 22.5857 10.5858C22.9607 10.2107 23.4694 10 23.9999 10ZM10.9999 20.5L13.9999 28H7.99986L10.9999 20.5ZM36.9999 20.5L39.9999 28H33.9999L36.9999 20.5Z"
      fill={`${theme === 'dark'? 'white': 'black'}`}
    />
  </svg>
);
export default LegalIcon;
