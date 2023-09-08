import styled from "@emotion/styled";
import React, { useState } from "react";
import { FilterProps } from "./types";
import { Icon } from "../../Foundation/Icon";

const Filter: React.FC<FilterProps> = ({ content }) => {
  const [rotated, setRotated] = useState<boolean>(false);

  const handleRotated = () => {
    setRotated(!rotated);
  };
  return (
    <Wrapper>
      <Container onClick={handleRotated}>
        <Text>{content}</Text>
        <Icon name="DirectionDown" rotated={rotated} width={12} height={8} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const Text = styled.span`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;

export { Filter };
