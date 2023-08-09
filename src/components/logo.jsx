import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="144"
      height="142"
      fill="none"
      viewBox="0 0 144 142"
    >
      <g clipPath="url(#clip0_104_109)" filter="url(#filter0_i_104_109)">
        <path
          fill="url(#paint0_linear_104_109)"
          fillRule="evenodd"
          d="M77.487 141.025c36.994-2.853 66.11-33.284 66.11-70.404C143.597 31.618 111.452 0 71.798 0 32.146 0 0 31.618 0 70.621c0 36.645 28.375 66.771 64.692 70.28l.22-34.805-23.204-.146a6.447 6.447 0 01-6.398-6.438 6.35 6.35 0 016.398-6.358l23.284.147.051-8.16-43.109-.271a6.447 6.447 0 01-6.397-6.438 6.35 6.35 0 016.397-6.358l43.19.272.055-8.709-34.3-.215a6.447 6.447 0 01-6.397-6.438 6.35 6.35 0 016.398-6.358l34.379.216.055-8.67-23.135-.146a6.446 6.446 0 01-6.398-6.438 6.35 6.35 0 016.398-6.358l23.215.146.056-8.854a6.447 6.447 0 016.438-6.398 6.35 6.35 0 016.357 6.398l-.19 30.4 43.137.272a6.446 6.446 0 016.397 6.438 6.35 6.35 0 01-6.397 6.358l-43.218-.272-.055 8.709 25.382.16a6.447 6.447 0 016.398 6.437 6.35 6.35 0 01-6.398 6.358l-25.463-.16-.35 55.803z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_i_104_109"
          width="143.597"
          height="145.025"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_104_109"></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_104_109"
          x1="71.799"
          x2="71.799"
          y1="0"
          y2="141.243"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EB00FF"></stop>
          <stop offset="1" stopColor="#FF2559"></stop>
        </linearGradient>
        <clipPath id="clip0_104_109">
          <path fill="#fff" d="M0 0H143.597V141.025H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Logo;
