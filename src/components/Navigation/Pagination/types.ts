import React, { SetStateAction } from "react";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
  list: any[];
  itemsPerPage?: number;
}

export type { PaginationProps };
