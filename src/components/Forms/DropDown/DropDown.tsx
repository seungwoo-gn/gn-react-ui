import React, { SetStateAction, useState } from "react";
import styled from "@emotion/styled";
import { Icon, Spacing } from "../../../index";
import { css } from "@emotion/react";
import { DropDownProps } from "./types";

const DropDown: React.FC<DropDownProps> = ({ main, setMain, list }) => {
  const [rotated, setRotated] = useState<boolean>(false);
  const [isFold, setIsFold] = useState<boolean>(false);

  const handleRotated = () => {
    setRotated(!rotated);
  };

  const handleFold = () => {
    setIsFold(!isFold);
    handleRotated();
  };

  const handleChangeMail = (object: React.ReactNode) => {
    setMain(object);
    setIsFold(!isFold);
  };

  return (
    <Container>
      <Main onClick={handleFold}>
        <Spacing justify="space-between" align="center">
          {main}
          <Icon name="DirectionDown" rotated={rotated} />
        </Spacing>
      </Main>
      <List isFold={isFold}>
        {list.map((object, index) => {
          return (
            <Other
              key={index + new Date().getTime()}
              onClick={() => handleChangeMail(object)}
              last={list.length - 1 === index}
            >
              {object}
            </Other>
          );
        })}
      </List>
    </Container>
  );
};

const Container = styled.div`
  z-index: 99;
`;

const Main = styled.div`
  display: flex;
  width: 276px;
  height: 48px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid;
  border-radius: 6px 6px 6px 6px;
  padding: 8px;
  cursor: pointer;
  background-color: white;
  margin-bottom: 4px;
`;

const Other = styled.div<{ last?: boolean }>`
  display: flex;
  width: 276px;
  height: 48px;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  border-radius: 6px 6px 6px 6px;
  margin-bottom: 4px;
  ${(props) =>
    props.last &&
    css`
      border-bottom: none;
      margin-bottom: 0;
    `}

  padding: 8px;
  cursor: pointer;
  background-color: white;

  &:hover {
    background: rgba(89, 136, 253, 0.2);
    transition: background-color 0.4s ease;
  }
`;

const List = styled.div<{ isFold: boolean }>`
  overflow: auto;
  width: 294px;
  max-height: 240px;
  border-bottom: 1px solid;
  border-radius: 0 6px 6px 6px;
  ${(props) =>
    props.isFold
      ? css`
          animation-name: dropdown;
          animation-duration: 500ms;
          animation-direction: normal;
        `
      : css`
          display: none;
        `}
`;

export { DropDown };
