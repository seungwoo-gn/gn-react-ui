import React from "react";
import { IconProps } from "../../../types/common";
import { Close } from "./Close";
import { DirectionDown } from "./DirectionDown";
import { DirectionUp } from "./DirectionUp";
import { DirectionLeft } from "./DirectionLeft";
import { DirectionRight } from "./DirectionRight";

const Icon: React.FC<IconProps> = ({
  name,
  width = 16,
  height = 16,
  fill = "#d337ac",
  rotated,
}) => {
  switch (name) {
    case "Close":
      return <Close width={width} height={height} fill={fill} />;
    case "DirectionDown":
      return (
        <DirectionDown
          rotated={rotated}
          width={width}
          height={height}
          fill={fill}
        />
      );
    case "DirectionUp":
      return <DirectionUp width={width} height={height} fill={fill} />;
    case "DirectionLeft":
      return <DirectionLeft width={width} height={height} fill={fill} />;
    case "DirectionRight":
      return <DirectionRight width={width} height={height} fill={fill} />;
  }
};

export { Icon };
