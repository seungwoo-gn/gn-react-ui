import React from "react";
import { TableHeadProps } from "./types";

const TableHead: React.FC<TableHeadProps> = ({ children, bordered }) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, [{ bordered: bordered }]);
        }
        return child;
      })}
    </>
  );
};

export { TableHead };
