import React from "react";
import { Icon } from "./index";

export default {
  title: "아이콘",
  component: Icon,
  parameters: {
    componentSubtitle: "Icon 컴포넌트",
  },
};

export const Close = () => {
  return <Icon name="Close" width={50} height={50} fill="#000" />;
};

export const DirectionUp = () => {
  return <Icon name="DirectionUp" width={50} height={50} fill="#000" />;
};

export const DirectionDown = () => {
  return <Icon name="DirectionDown" width={50} height={50} fill="#000" />;
};

export const DirectionLeft = () => {
  return <Icon name="DirectionLeft" width={50} height={50} fill="#000" />;
};

export const DirectionRight = () => {
  return <Icon name="DirectionRight" width={50} height={50} fill="#000" />;
};
