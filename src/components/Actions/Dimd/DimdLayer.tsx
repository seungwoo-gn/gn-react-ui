import styled from "@emotion/styled";
import React from "react";

interface DimdLayerProps {
  onClick: () => void;
}

const DimdLayer: React.FC<DimdLayerProps> = ({ onClick }) => {
  return <Dimd onClick={onClick} />;
};

const Dimd = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 80;
  transition: opacity 0.2s cubic-bezier(0.5, 0, 0.4, 1);
`;

export { DimdLayer };
