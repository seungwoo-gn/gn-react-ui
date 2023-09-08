import React from "react";
import styled from "@emotion/styled";
import { CommonTabProps } from "./types";
import { css } from "@emotion/react";
import { Typography } from "../../Foundation/Typography";

const CommonTab: React.FC<CommonTabProps> = ({
  tabNames,
  tabIdx = 0,
  changeTabIdx,
  backgroundColor = "#fff",
  children,
}) => {
  const handleChangeTab = (index: number) => {
    changeTabIdx(index);
  };

  return (
    <Wrapper backgroundColor={backgroundColor}>
      <ContentContainer>
        <TabContainer>
          {tabNames?.map((object, index) => {
            if (typeof object === "string") {
              return (
                <TextTabWrapper
                  key={index + new Date().getTime()}
                  onClick={() => handleChangeTab(index)}
                  current={index === tabIdx}
                >
                  <Typography
                    size={21}
                    weight={index === tabIdx ? 700 : 500}
                    color={index === tabIdx ? "#6c6a6a" : "#9c9a9a"}
                  >
                    {object}
                  </Typography>
                </TextTabWrapper>
              );
            } else {
              return (
                <TabWrapper
                  key={index + new Date().getTime()}
                  onClick={() => handleChangeTab(index)}
                >
                  {object}
                </TabWrapper>
              );
            }
          })}
        </TabContainer>
        {children}
      </ContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  padding: 0 4px;
  width: 100%;
  border-radius: 6px;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  gap: 15px;
`;

const TextTabWrapper = styled.div<{ current?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.current
      ? css`
          border-bottom: 2px solid #000;
        `
      : css`
          &:hover {
            filter: brightness(1.2);
          }
        `}
`;

const TabWrapper = styled.div`
  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  gap: 10px;
`;

export { CommonTab };
