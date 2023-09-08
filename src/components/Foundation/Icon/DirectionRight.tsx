import React from "react";
import { IconProps } from "../../../types/common";

export const DirectionRight: React.FC<IconProps> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Ico/chevron_right">
        <path
          id="Path"
          d="M8 4L16 12.0889L8 20"
          stroke="fff"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
      </g>
    </svg>
  );
};
