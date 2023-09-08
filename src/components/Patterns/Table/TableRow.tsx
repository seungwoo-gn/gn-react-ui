import React from "react";
import { TableRowProps } from "./types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const TableRow: React.FC<TableRowProps> = ({ children, isHeader = false }) => {
  return (
    <Container isHeader={isHeader}>
      {React.Children.map(children, (cell, index) => {
        if (React.isValidElement(cell)) {
          const isFirst = index === 0;
          const isLast = index === React.Children.count(children) - 1;

          return React.cloneElement(cell, [
            {
              isFirst,
              isLast,
              bordered: isLast ? false : cell.props.bordered,
            },
          ]);
        }
        return cell;
      })}
    </Container>
  );
};

const Container = styled.div<{ isHeader: boolean }>`
  width: 100%;
  ${(props) =>
    props.isHeader &&
    css`
      border-top: 1px solid #1f1f27;
    `}
  border-bottom: 1px solid #1f1f27;
  display: flex;
`;

export { TableRow };
