import { FormItemProps } from "./types";
import React from "react";
import { Spacing, TextInput, Typography } from "../../../index";
import { decimalNumberRegex } from "./regex";
import styled from "@emotion/styled";

const FormItem: React.FC<FormItemProps> = ({
  title,
  placeholder,
  value,
  onChange,
  required,
  regex,
  type,
}) => {
  const handleOnChange = (value: string) => {
    if (regex) {
      switch (type) {
        case "number":
          if (decimalNumberRegex.test(value)) {
            onChange(value);
          } else {
            return;
          }
          return;
        default:
          onChange(value);
      }
    } else {
      onChange(value);
    }
  };

  return (
    <Spacing gap={10} align="center">
      <TitleWrapper>
        {title && title}
        {required && (
          <Typography align="center" size={24} color="#ff7f00">
            *
          </Typography>
        )}
      </TitleWrapper>
      <FormContainer>
        <TextInput
          type={type || "text"}
          placeholder={placeholder || ""}
          value={value}
          onChange={handleOnChange}
        />
      </FormContainer>
    </Spacing>
  );
};

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 5px;
  width: 100px;
  align-items: center;
`;
export { FormItem };
