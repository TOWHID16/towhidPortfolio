import React from 'react';

const BackgroundLogo = ({ width, height, strokeWidth = 10 }) => (
  <svg
    viewBox="0 0 406 368"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // CHANGE: Replaced all positioning classes to perfectly center the logo
    className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[650px]"
    style={{ width, height }}
  >
    <path
      d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
      stroke="#1F2667"
      strokeOpacity="0.9"
      strokeWidth={strokeWidth}
    />
    <path
      d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
      stroke="url(#paint0_linear_hero)"
      strokeWidth={strokeWidth}
    />
    <defs>
      <linearGradient
        id="paint0_linear_hero"
        x1="205.549"
        y1="20.0169"
        x2="204.338"
        y2="342.461"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1595B6" />
        <stop offset="1" stopColor="#1595B6" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default BackgroundLogo;