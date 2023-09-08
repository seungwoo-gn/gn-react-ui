import React from "react";
import { SkeletonProps } from "./types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Skeleton: React.FC<SkeletonProps> = ({ width, height, borderRadius }) => {
  return (
    <SkeletonContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      <SkeletonLine />
    </SkeletonContainer>
  );
};

const SkeletonContainer = styled.div<SkeletonProps>`
  background-color: #ddd;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius}px;
    `};
`;

const SkeletonLine = styled.div`
  position: absolute; /* 절대 위치 설정 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, #f7fcf8, transparent);

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  animation: loading 1.5s linear infinite;
`;

export { Skeleton };
