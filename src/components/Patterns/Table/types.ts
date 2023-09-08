import React from "react";

interface TableCellProps {
  width?: number;
  backgroundColor?: string;
  align?: string;
  justify?: string;
  isFirst?: boolean;
  isLast?: boolean;
  bordered?: boolean;
  children: string | React.ReactNode;
}

interface TableRowProps {
  children: React.ReactNode[];
  isHeader?: boolean;
  bordered?: boolean;
}

interface TableHeadProps {
  children: React.ReactNode;
  bordered?: boolean;
}

interface TableBodyProps {
  children: React.ReactNode;
  bordered?: boolean;
}

interface TableProps {
  children: React.ReactNode;
  pagination?: React.ReactNode;
}
export type {
  TableRowProps,
  TableCellProps,
  TableHeadProps,
  TableBodyProps,
  TableProps,
};
