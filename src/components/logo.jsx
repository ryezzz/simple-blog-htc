import React from "react";

function Logo({height}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    fill="none"
    viewBox="0 0 549 607"
  >
    <g filter="url(#filter0_d_245_58)">
      <path
        fill="url(#paint0_linear_245_58)"
        fillRule="evenodd"
        d="M307.708 515.001C307.617 529.36 295.904 541 281.544 541h-2.002c-14.359 0-25.927-11.64-25.837-25.999l.202-32.063c.146-23.196-18.539-42.118-41.735-42.264l-34.996-.22c-14.359-.09-25.999-11.804-25.999-26.163v-2.003c0-14.359 11.64-25.926 25.999-25.836l61.108.384c8.962.057 16.273-7.163 16.329-16.125a16.227 16.227 0 00-13.919-16.164l-168.958-24.28c-14.214-2.042-24.153-15.231-22.2-29.457l.273-1.983c1.953-14.226 15.058-24.103 29.272-22.061l162.135 23.3c7.313 1.05 13.871-4.597 13.917-11.985.046-7.298-6.291-12.999-13.543-12.185l-34.563 3.88c-14.269 1.602-27.209-8.659-28.9-22.919l-.236-1.988c-1.692-14.259 8.505-27.117 22.774-28.719l17.818-2.001c21.149-2.374 37.18-20.191 37.314-41.473l.203-32.273V148.401c0-.33.006-.659.018-.986L256.524 67c.091-14.36 11.805-26 26.164-26h2.002c14.36 0 25.927 11.64 25.837 26l-.087 13.742c-.146 23.196 18.54 42.118 41.735 42.264l21.375.134c14.359.09 25.999 11.804 25.999 26.164v2.002c0 14.359-11.64 25.927-25.999 25.836l-46.223-.29c-9.66-.061-17.54 7.72-17.601 17.38-.066 10.477 9.031 18.661 19.442 17.492l139.711-15.684c14.27-1.602 27.209 8.659 28.901 22.919l.236 1.988c1.691 14.259-8.505 27.118-22.775 28.72l-145.166 16.296c-11.872 1.333-20.871 11.335-20.947 23.282-.074 11.782 8.561 21.81 20.224 23.486l53.27 7.655c14.213 2.042 24.152 15.23 22.199 29.456l-.272 1.984c-1.953 14.226-15.059 24.103-29.272 22.06l-18.951-2.723c-25.208-3.622-47.813 15.843-47.973 41.309l-.645 102.529z"
        clipRule="evenodd"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_d_245_58"
        width="456.908"
        height="508"
        x="45.291"
        y="41"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_245_58"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_245_58"
          result="shape"
        ></feBlend>
      </filter>
      <linearGradient
        id="paint0_linear_245_58"
        x1="273.745"
        x2="273.996"
        y1="41"
        y2="517.868"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFB800"></stop>
        <stop offset="0.505" stopColor="#9143F4"></stop>
        <stop offset="1" stopColor="#00FF28"></stop>
      </linearGradient>
    </defs>
  </svg>
  );
}

export default Logo;
