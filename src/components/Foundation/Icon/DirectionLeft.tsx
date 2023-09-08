import React from "react";
import { IconProps } from "../../../types/common";

export const DirectionLeft: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Ico/chevron_left">
        <path
          id="Path"
          d="M16 20L8 12.0889L16 4"
          stroke="fff"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
      </g>
    </svg>
  );
};
