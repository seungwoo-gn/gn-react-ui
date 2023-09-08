import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "disabled"
  | "disabledOnSurface";
type SizeVariant = "small" | "medium" | "large" | "header" | "custom";
type TypeVariant = "button" | "submit" | "reset";

interface ButtonProps {
  mode: ButtonVariant;
  size?: SizeVariant;
  type?: TypeVariant;
  disabledColor?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  custom?: {
    padding?: string;
    fontSize?: string;
    borderRadius?: number;
    height?: number;
    background?: string;
    fontWeight?: number;
    width?: boolean;
  };
}

const StyledButton = styled.button<ButtonProps>`
  font-weight: 700;
  border: 0;
  border-radius: 5px;
  display: inline-block;

  ${({ mode, disabledColor }: ButtonProps) => {
    switch (mode) {
      case "primary":
        return css`
          color: #ffffff;
          position: relative;
          background: linear-gradient(160deg, #d009bc, #b51775, #fc6e27);
          transition: filter 0.4s ease;
          cursor: pointer;

          &:hover {
            filter: brightness(1.2);
          }
        `;
      case "secondary":
        return css`
          color: #ffffff;
          background-color: #47008c;
          transition: background-color 0.4s ease;
          cursor: pointer;

          &:hover {
            background-color: #5500a8;
          }
        `;
      case "tertiary":
        return css`
          color: #ffffff;
          background-color: #2e2e3e;
          transition: background-color 0.4s ease;
          cursor: pointer;

          &:hover {
            background: #38384b;
          }
        `;
      case "disabled":
        return css`
          color: #50506a;
          ${disabledColor
            ? css`
                background-color: ${disabledColor};
              `
            : css`
                background-color: #21212e;
              `}
        `;
      case "disabledOnSurface":
        return css`
          color: #62627d;
          background-color: #2e2e3e;
        `;
      default:
        return "";
    }
  }}

  ${({ size, custom }: ButtonProps) => {
    switch (size) {
      case "large":
        return css`
          width: 100%;
          height: 53px;
          font-size: 17px;
        `;
      case "medium":
        return css`
          width: 100%;
          height: 36px;
          font-size: 14px;
          padding: 9.5px 21px;
          white-space: nowrap;
        `;
      case "small":
        return css`
          width: 100%;
          display: flex;
          justify-content: center;
          height: 30px;
          font-size: 14px;
          padding: 8px 12px;
          align-items: center;
          border-radius: 4px;
        `;
      case "header":
        return css`
          font-weight: 600;
          font-size: 13px;
          padding: 6px 12.5px;
          line-height: 19px;
          border-radius: 4px;
        `;
      case "custom":
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${custom?.fontSize};
          font-weight: ${custom?.fontWeight};
          padding: ${custom?.padding};

          ${custom?.background &&
          css`
            background: ${custom.background};
          `}
          border-radius: ${custom?.borderRadius ? custom.borderRadius : 5}px;
          ${custom?.width
            ? css`
                width: fit-content;
              `
            : css`
                width: 100%;
              `}
          ${custom?.height &&
          css`
            height: ${custom.height}px;
          `}
        `;
      default:
        return "";
    }
  }}
`;

function Button(props: ButtonProps) {
  const { mode, children, ...rest } = props;
  const isDisabled = mode === "disabled" || mode === "disabledOnSurface";

  return (
    <StyledButton mode={mode} {...rest} disabled={isDisabled}>
      {children}
    </StyledButton>
  );
}

export { Button };
