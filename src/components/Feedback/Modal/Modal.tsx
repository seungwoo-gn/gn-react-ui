import styled from "@emotion/styled";
import mediaQuery from "../../../types/mediaQuery";
import React from "react";
import { ModalProps } from "./types";
import { Spacing } from "../../Foundation/Spacing";
import { css } from "@emotion/react";
import { Icon } from "../../Foundation/Icon";

const Modal: React.FC<ModalProps> = ({
  children,
  width,
  height,
  borderRadius,
  padding = "20",
  backgroundColor = "#121217",
  okButton,
  cancelButton,
  onClose,
}) => {
  return (
    <ModalContainer
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
    >
      <IconWrapper onClick={onClose}>
        <Icon name="Close" width={30} height={30} fill="#000" />
      </IconWrapper>
      <Spacing gap={5} column>
        {children}
        <ButtonWrapper>
          {cancelButton && cancelButton}
          {okButton && okButton}
        </ButtonWrapper>
      </Spacing>
    </ModalContainer>
  );
};

const ModalContainer = styled.div<ModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
  background-color: ${(props) => props.backgroundColor};

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding}px;
    `}
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
  ${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius}px;
    `}
  ${mediaQuery.tabletWidth} {
    max-width: 460px;
    width: calc(100% - 40px);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: stretch;
  gap: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`;

export { Modal };
