import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { SpacingProps } from "./types";

const Spacing: React.FC<SpacingProps> = ({
  gap = 0,
  column = false,
  align = "start",
  justify,
  cursor,
  children,
  onClick,
}) => {
  return (
    <GapContainer
      onClick={onClick}
      gap={gap}
      column={column}
      align={align}
      justify={justify}
      cursor={cursor}
    >
      {children}
    </GapContainer>
  );
};

const GapContainer = styled.div<SpacingProps>`
  display: flex;
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `}

  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}

  ${(props) =>
    props.cursor &&
    css`
      cursor: pointer;
    `}
  gap: ${(props) => props.gap}px;
`;

export { Spacing };
