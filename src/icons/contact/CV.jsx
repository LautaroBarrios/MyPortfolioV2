import React from "react";

const CV = () => {
  return (
    <>
      <style>
        {`
          @keyframes colorChange {
            0% {
              stroke: #ffffff; /* Color inicial */
              fill: none;
            }
            100% {
              stroke: #0C7075; /* Color final */
              fill: #ffffff; /* Fondo blanco */
            }
          }

          .cv-icon path {
            animation: colorChange 6s forwards;
            stroke-dasharray: 0, 10000;
            animation: stroke-dasharray 6s forwards, colorChange 1.5s forwards;
          }

          @keyframes stroke-dasharray {
            from {
              stroke-dasharray: 0, 10000;
            }
            to {
              stroke-dasharray: 10000, 0;
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="cv-icon"
      >
        <path
          fill="none"
          stroke="#ffffff"
          strokeWidth="25"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48z
          M146.88 165.234c19.636 0 37.082 6.789 49.929 16.971 11.88 9.452 17.444 18.907 22.298 27.393l-33.923 16.949c-2.427-5.565-5.347-11.387-12.846-17.682-8.248-6.552-16.478-8.484-23.524-8.484-27.626 0-42.17 25.693-42.17 54.287 0 37.573 19.161 56.22 42.17 56.22 22.3 0 31.278-15.51 37.08-25.435l28.583 16.715c-6.315 9.926-12.374 19.635-25.95 29.069-7.262 5.09-23.977 15.037-47.736 15.037-45.328 0-81.914-32.956-81.914-90.896 0-50.636 34.415-90.637 82.88-90.637z
          M222.363 170.562h45.565L303.31 292.24l35.125-121.678H384l-59.379 171.112H281.01z"
        />
      </svg>
    </>
  );
};

export default CV;
