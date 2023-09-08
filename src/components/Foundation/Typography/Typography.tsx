import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";
import { TypographyProps } from "./types";

const Typography: React.FC<TypographyProps> = ({
  weight,
  size,
  color,
  height,
  children,
  align = "start",
  inline = false,
}) => {
  return (
    <Text
      color={color}
      size={size}
      height={height}
      weight={weight}
      align={align}
      inline={inline}
    >
      {children}
    </Text>
  );
};

const Text = styled.div<TypographyProps>`
  color: ${(props) => props.color && props.color};
  font-size: ${(props) => props.size && `${props.size}px`};
  line-height: ${(props) => props.height && `${props.height}px`};
  font-weight: ${(props) => props.weight && props.weight};
  text-align: ${(props) => props.align && props.align};
  ${(props) =>
    props.inline &&
    css`
      display: inline;
    `}
`;

export { Typography };
