import React from "react";
import { TableBodyProps } from "./types";

const TableBody: React.FC<TableBodyProps> = ({ children, bordered }) => {
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

export { TableBody };
