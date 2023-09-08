import React from "react";
import { Breadcrumbs, Icon, Typography } from "../../../index";

export default {
  title: "목차",
  component: Breadcrumbs,
  parameters: {
    componentSubtitle: "Breadcrumbs 컴포넌트",
  },
};

const stringSample: string[] = ["1", "2", "#"];

const componentSample: React.ReactNode[] = [
  <Typography key={0} size={24} color="red">
    1
  </Typography>,
  <Typography key={1} size={24} color="blue">
    2
  </Typography>,
  <Typography key={2} size={24} color="green">
    3
  </Typography>,
];

export const defaultBreadcrumbs = () => {
  return <Breadcrumbs list={stringSample} current={"1"} />;
};

export const componentBreadcrumbs = () => {
  return (
    <Breadcrumbs
      list={componentSample}
      separator={
        <Icon name="DirectionRight" width={24} height={24} fill="#000" />
      }
      current={"1"}
    />
  );
};
