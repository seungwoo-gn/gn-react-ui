import { BreadcrumbsProps } from "./types";
import React from "react";
import { Spacing, Typography } from "../../../index";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  list,
  current,
  separator = (
    <Typography size={24} color="#B8B9BA">
      -
    </Typography>
  ),
}) => {
  return (
    <Spacing gap={8}>
      {list.map((object, index) => {
        if (typeof object === "string") {
          return (
            <Spacing key={index + new Date().getTime()} gap={8} align="center">
              <Typography
                size={24}
                color={object === current ? "fff" : "#B8B9BA"}
              >
                {object}
              </Typography>
              {list.length - 1 !== index && separator}
            </Spacing>
          );
        } else {
          return (
            <Spacing key={index + new Date().getTime()} gap={8} align="center">
              {object}
              {list.length - 1 !== index && separator}
            </Spacing>
          );
        }
      })}
    </Spacing>
  );
};

export { Breadcrumbs };
