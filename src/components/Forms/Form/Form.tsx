import { FormProps } from "./types";
import React from "react";
import { Spacing } from "../../Foundation/Spacing";
import styled from "@emotion/styled";

const Form: React.FC<FormProps> = ({ gap, onClick, button, children }) => {
  return (
    <FormContainer>
      <Spacing gap={gap} align="center" column>
        {children}
      </Spacing>
      <ButtonContainer>
        <ButtonWrapper>
          {button &&
            React.Children.map(button, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, [{ onClick: onClick }]);
              }
              return child;
            })}
        </ButtonWrapper>
      </ButtonContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  width: 200px;
`;

export { Form };
