import React from "react";
import { IconProps } from "../../../types/common";
import styled from "@emotion/styled";

export const DirectionUp: React.FC<IconProps> = ({
  width,
  height,
  fill,
  rotated,
}) => {
  return (
    <Container>
      <Wrapper
        rotated={rotated || false}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Ico/chevron_up">
          <path
            id="Path"
            d="M4 15L12 9L20 15"
            stroke="fff"
            strokeWidth="2"
            strokeLinejoin="bevel"
          />
        </g>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 12px;
`;

const Wrapper = styled.svg<{ rotated: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    rotate(${(props) => (props.rotated ? "180deg" : "0deg")});
  transition: transform 200ms ease-in-out;
`;
