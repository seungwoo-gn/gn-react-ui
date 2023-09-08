import React from "react";
import styled from "@emotion/styled";
import { CheckedIcon, UnCheckedIcon } from "./RadioIcon";
import { Spacing } from "../../Foundation/Spacing";
import { StyledRadioProps } from "./types";

const Radio: React.FC<StyledRadioProps> = ({
  list,
  value,
  onChange,
  column,
}) => {
  return (
    <Spacing column={column} align="center" gap={3}>
      {list.map((object, index) => {
        return (
          <StyledLabel
            htmlFor={object.label}
            key={index + new Date().getTime()}
          >
            <StyledRadio
              type="radio"
              value={object.value}
              checked={object.value === value}
              onChange={() => onChange(object.value)}
              id={object.label}
              disabled={object.disabled}
            />
            {object.label}
          </StyledLabel>
        );
      })}
    </Spacing>
  );
};

const StyledRadio = styled.input`
  appearance: none; // IE11은 지원 안 됨..
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml;charset=utf8,${UnCheckedIcon}");

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml;charset=utf8,${CheckedIcon}");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  &:not(:checked) {
    border-color: transparent;
    background-image: url("data:image/svg+xml;charset=utf8,${UnCheckedIcon}");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;

export { Radio };
