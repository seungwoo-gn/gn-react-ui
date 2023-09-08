import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TextInputProps } from "./types";
import { Icon } from "../../Foundation/Icon";

const TextInput: React.FC<TextInputProps> = ({
  type,
  placeholder,
  value = "",
  disabled = false,
  error = false,
  onChange = () => {},
}) => {
  const stringField = type === "text";

  const rightIcon = () => {
    if (value.length === 0) return null;
    return (
      <CloseButton type="button" onClick={() => onChange("")}>
        <Icon name="Close" width={20} height={20} fill="#000" />
      </CloseButton>
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // getValue(targetValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      <Container mode={type} disabled={disabled} error={error}>
        <CustomInput
          type={type}
          stringField={stringField}
          disabled={disabled}
          error={error}
          placeholder={placeholder}
          onChange={handleChange}
          mode={type}
          value={value}
          onKeyUp={(e) => handleKeyPress(e)}
        />
        <Right>{rightIcon()}</Right>
      </Container>
      {error && <ErrorMessage>error message</ErrorMessage>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Container = styled.div<{
  disabled: boolean;
  error: boolean;
  mode: string;
}>`
  height: 36px;
  display: flex;
  padding: 8px 14px;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  width: 300px;

  position: relative;

  gap: 10px;

  border: 1px solid var(--primary-500, #000);
  ${(props) =>
    props.error &&
    css`
      border: 1px solid var(--secondary-500, #d33b55);
    `}

  ${(props) =>
    !props.disabled &&
    !props.error &&
    css`
      &:hover {
        border: 1px solid var(--primary-800, #30005e);
      }
    `}

  ${(props) =>
    !props.error &&
    css`
      &:focus-within {
        border: 1px solid var(--primary-500, #7700ea);
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      border: 0;
      background: #22222c;
    `}
`;

const CustomInput = styled.input<{
  error: boolean;
  stringField: boolean;
  disabled: boolean;
  mode: string;
}>`
  border: none;
  background: rgba(0, 0, 0, 0);

  &:focus {
    outline: none;
  }

  outline: none;
  width: 100%;
  height: 32px;
  caret-color: ${(props) => (props.error ? css`#d33b55` : css`#9233ee`)};
  color: #000;
  font-style: normal;
  line-height: normal;

  font-size: 16px;
  font-weight: 500;

  ${(props) =>
    props.disabled &&
    css`
      background: #22222c;
    `}
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
  }
`;

const Right = styled.div`
  /* 아이콘 스타일 설정 */
  color: var(--gray-600, #62627d);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ErrorMessage = styled.div`
  display: flex;
  padding: 0 16px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  color: var(--secondary-500, #d33b55);
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export { TextInput };
