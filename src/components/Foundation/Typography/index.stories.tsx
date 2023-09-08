import React from "react";
import { Typography } from "./Typography";

export default {
  title: "텍스트",
  component: Typography,
  parameters: {
    componentSubtitle: "Typography 컴포넌트",
  },
};

export const defaultTypography = () => {
  return (
    <Typography
      size={32}
      height={21}
      align="center"
      weight={500}
      color="#21a334"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Typography>
  );
};

export const leftTypography = () => {
  return (
    <Typography
      size={32}
      height={21}
      align="start"
      weight={500}
      color="#21a334"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Typography>
  );
};

export const rightTypography = () => {
  return (
    <Typography size={32} height={21} align="end" weight={500} color="#21a334">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Typography>
  );
};
