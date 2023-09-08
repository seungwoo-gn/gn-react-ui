import React from "react";
import { TableProps } from "./types";
import styled from "@emotion/styled";
import { Spacing } from "../../Foundation/Spacing";

const Table: React.FC<TableProps> = ({ children, pagination }) => {
  return (
    <Spacing column align="center" gap={8}>
      <Container>{children}</Container>
      {pagination && pagination}
    </Spacing>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export { Table };
