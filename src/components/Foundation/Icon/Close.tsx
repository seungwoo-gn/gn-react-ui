import React from "react";
import { IconProps } from "../../../types/common";

export const Close: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 10.5859L6.20718 4.79297L4.79297 6.20718L10.5859 12.0001L4.79297 17.793L6.20718 19.2072L12.0001 13.4143L17.793 19.2072L19.2072 17.793L13.4143 12.0001L19.2072 6.20718L17.793 4.79297L12.0001 10.5859Z"
        fill={fill}
      />
    </svg>
  );
};
