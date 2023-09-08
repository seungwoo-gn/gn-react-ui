import React from "react";
import styled from "@emotion/styled";
import { Spacing } from "./index";

export default {
  title: "스페이싱",
  component: Spacing,
  parameters: {
    componentSubtitle: "Spacing 컴포넌트",
  },
};

export const defaultSpacing = () => {
  return (
    <Spacing gap={10}>
      <RedColorBox />
      <BlueColorBox />
    </Spacing>
  );
};

export const columnSpacing = () => {
  return (
    <Spacing gap={10} column>
      <RedColorBox />
      <BlueColorBox />
    </Spacing>
  );
};

const RedColorBox = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

const BlueColorBox = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;
