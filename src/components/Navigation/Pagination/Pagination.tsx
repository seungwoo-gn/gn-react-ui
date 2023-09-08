import styled from "@emotion/styled";
import React, { SetStateAction, useEffect, useState } from "react";
import { Spacing } from "../../Foundation/Spacing";
import { css } from "@emotion/react";
import { Icon } from "../../Foundation/Icon";
import { PaginationProps } from "./types";

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 0,
  setCurrentPage,
  list,
  itemsPerPage = 10,
}) => {
  const [pageValue, setPageValue] = useState<number>(0);
  const [currentList, setCurrentList] = useState<any[]>(
    list.slice(0, itemsPerPage),
  );

  const handleChangePage = (page: number) => {
    setCurrentPage(page + itemsPerPage * pageValue);
  };

  const handlePlusPageValue = () => {
    setPageValue((prevPageValue) => prevPageValue + 1);
  };

  const handleMinusPageValue = () => {
    setPageValue((prevPageValue) => prevPageValue - 1);
  };

  useEffect(() => {
    setCurrentList(
      // setCurrentList(list.slice(0, itemsPerPage));
      pageValue === 0
        ? list.slice(pageValue * itemsPerPage, itemsPerPage)
        : list.slice(pageValue * itemsPerPage, (pageValue + 1) * itemsPerPage),
    );
  }, [pageValue]);

  return (
    <Container>
      <Spacing gap={6}>
        {pageValue !== 0 && (
          <CircleText onClick={handleMinusPageValue}>
            <Icon name="DirectionLeft" width={32} height={32} fill="#000" />
          </CircleText>
        )}

        {currentList.map((object, index) => {
          return (
            <CircleText
              key={index + new Date().getTime()}
              onClick={() => handleChangePage(index)}
              current={currentPage === index + itemsPerPage * pageValue}
            >
              {index + 1 + pageValue * itemsPerPage}
            </CircleText>
          );
        })}
        {!((pageValue + 1) * itemsPerPage >= list.length) && (
          <CircleText onClick={handlePlusPageValue}>
            <Icon name="DirectionRight" width={32} height={32} fill="#000" />
          </CircleText>
        )}
      </Spacing>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const CircleText = styled.div<{ current?: boolean }>`
  display: flex;
  padding: 10px;
  cursor: pointer;
  height: 10px;
  width: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 6px;

  ${(props) =>
    props.current
      ? css`
          background: rgba(89, 136, 253, 0.2);
        `
      : css`
          &:hover {
            background: rgba(89, 136, 253, 0.2);
            transition: background-color 0.4s ease;
          }
        `}
`;
export { Pagination };
