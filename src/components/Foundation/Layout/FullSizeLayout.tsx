import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FullSizeLayoutProps } from "./types";
import { Icon, Typography } from "../../../index";

const FullSizeLayout: React.FC<FullSizeLayoutProps> = ({
  children,
  headerTitle,
  headerTab,
  previousPage,
  AdditionalTab = 0,
}) => {
  const handleClick = () => {
    console.log("Click!");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Layout>
      <Header>
        {headerTab && headerTab}
        {previousPage ? (
          <PreviousIconWrapper onClick={handleClick}>
            <Icon name="DirectionLeft" width={12} height={20} />
          </PreviousIconWrapper>
        ) : (
          <CloseIconWrapper onClick={handleClick}>
            <Icon name="Close" width={20} height={20} />
          </CloseIconWrapper>
        )}
        <Typography color="#ffffff" size={20} weight={700} height={24}>
          {headerTitle}
        </Typography>
      </Header>
      <MainContainer AdditionalTab={AdditionalTab}>{children}</MainContainer>
    </Layout>
  );
};

const Layout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #121217;
  z-index: 999;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 62px;
  color: #ffffff;
`;

const CloseIconWrapper = styled.div`
  position: absolute;
  top: 21px;
  right: 21px;
`;

const PreviousIconWrapper = styled.div`
  position: absolute;
  top: 21px;
  left: 21px;
  cursor: pointer;
`;

const MainContainer = styled.main<{ AdditionalTab: number }>`
  overflow-y: scroll;
  color: #fff;

  ${(props) =>
    props.AdditionalTab
      ? css`
          height: calc(100dvh - 62px - ${props.AdditionalTab}px);
        `
      : css`
          height: calc(100dvh - 62px);
        `}
`;

export { FullSizeLayout };
