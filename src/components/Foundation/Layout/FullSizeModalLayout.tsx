import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Icon, Typography } from "../../../index";
import mediaQuery from "../../../types/mediaQuery";
import { FullSizeModalLayoutProps } from "./types";

type CloseEvent =
  | React.MouseEvent<Element, MouseEvent>
  | React.KeyboardEvent<Element>;

const FullSizeModalLayout: React.FC<FullSizeModalLayoutProps> = ({
  children,
  headerTitle,
  isBottom,
  bottomButton,
  previousPage = false,
  onClose,
}) => {
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <Layout>
      <Header>
        {previousPage ? (
          <PreviousIconWrapper onClick={handleClose}>
            <Icon name="DirectionLeft" width={12} height={20} />
          </PreviousIconWrapper>
        ) : (
          <CloseIconWrapper onClick={handleClose}>
            <Icon name="CloseBig" width={20} height={20} />
          </CloseIconWrapper>
        )}
        <Typography color="#ffffff" size={20} weight={700} height={24}>
          {headerTitle}
        </Typography>
      </Header>
      <MainContainer isBottom={isBottom}>{children}</MainContainer>
      {bottomButton && (
        <BottomButtonWrapper>{bottomButton}</BottomButtonWrapper>
      )}
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
  cursor: pointer;
`;

const PreviousIconWrapper = styled.div`
  position: absolute;
  top: 21px;
  left: 21px;
  cursor: pointer;
`;

const MainContainer = styled.main<{ isBottom?: number }>`
  overflow-y: scroll;

  ${mediaQuery.tabletWidth} {
    max-width: 460px;
    margin: 0 auto;
    width: 100%;
  }

  color: #fff;

  ${(props) =>
    props.isBottom
      ? css`
          height: calc(100dvh - 62px - ${props.isBottom}px);
        `
      : css`
          height: calc(100dvh - 62px);
        `}
`;

const BottomButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px;

  ${mediaQuery.tabletWidth} {
    max-width: 460px;
    margin: 0 auto;
    width: 100%;
  }
`;

export { FullSizeModalLayout };
