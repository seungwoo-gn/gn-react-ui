import { TableCellProps } from "./types";
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TableCell: React.FC<TableCellProps> = ({
  width = 120,
  backgroundColor = "#fff",
  align = "center",
  justify = "left",
  isFirst,
  isLast,
  bordered,
  children,
}) => {
  return (
    <Pool
      width={width}
      backgroundColor={backgroundColor}
      justify={justify}
      align={align}
      isFirst={isFirst}
      isLast={isLast}
      bordered={bordered}
    >
      {children}
    </Pool>
  );
};

const Pool = styled.div<TableCellProps>`
  display: flex;
  width: ${(props) => props.width}px;
  padding: 0 10px;
  height: 50px;

  ${(props) =>
    props.bordered &&
    css`
      border-right: 1px solid;
    `}

  ${(props) =>
    props.isLast &&
    css`
      border-right: none;
    `}

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;
export { TableCell };
