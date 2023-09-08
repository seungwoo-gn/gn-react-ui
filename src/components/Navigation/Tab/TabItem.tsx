import { TabItemProps } from "./types";
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TabItem: React.FC<TabItemProps> = ({ tabIdx, value, children }) => {
  return (
    <TabItemContainer tabIdx={tabIdx} value={value}>
      {children}
    </TabItemContainer>
  );
};

const TabItemContainer = styled.div<TabItemProps>`
  ${(props) =>
    props.tabIdx === props.value
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`;
export { TabItem };
