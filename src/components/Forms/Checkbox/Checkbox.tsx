import React from "react";
import styled from "@emotion/styled";
import { CheckSvgCode } from "../../Foundation/Icon/Check";
import { CheckboxProps } from "./types";

const Checkbox: React.FC<CheckboxProps> = ({ label, labelKey }) => {
  return (
    <StyledLabel htmlFor={labelKey}>
      <StyledCheckbox type="checkbox" id={labelKey} />
      {label}
    </StyledLabel>
  );
};

const StyledCheckbox = styled.input`
  appearance: none; // IE11은 지원 안 됨..

  width: 24px;
  height: 24px;
  border: 1.5px solid gainsboro;
  border-radius: 6px;

  &:checked {
    border-color: transparent;

    background-image: url("data:image/svg+xml;charset=utf8,${CheckSvgCode}");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: rgba(89, 136, 253, 0.2);
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;

export { Checkbox };
