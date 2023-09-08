import React from "react";
import { IconProps } from "../../../types/common";

export const ChartPoint: React.FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Ico/radio-button">
        <circle
          id="Oval"
          cx="12"
          cy="12"
          r="10"
          stroke="#5988FD"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
        <circle
          id="Oval_2"
          cx="12"
          cy="12"
          r="6"
          fill="#5988FD"
          stroke="#5988FD"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
      </g>
    </svg>
  );
};
