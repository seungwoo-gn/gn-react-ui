import React, { useState } from "react";
import { Pagination } from "./Pagination";

const tempList: any[] = [];

for (let i = 0; i < 101; i++) {
  tempList.push(i);
}

export default {
  title: "페이지네이션",
  component: Pagination,
  parameters: {
    componentSubtitle: "Pagination 컴포넌트",
  },
};

export const defaultPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <Pagination
      list={tempList}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
};
