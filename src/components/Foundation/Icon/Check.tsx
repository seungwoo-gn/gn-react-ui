import React from "react";
import { IconProps } from "../../../types/common";

export const Check: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Ico/check">
        <path
          id="Path"
          d="M4 11L10 17L20 7"
          stroke="#5988FD"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const CheckSvgCode = encodeURIComponent(`
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Ico/check">
        <path
          id="Path"
          d="M4 11L10 17L20 7"
          stroke="#5988FD"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </g>
    </svg>
`);
