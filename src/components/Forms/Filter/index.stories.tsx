import React from "react";
import { Filter } from "./index";

export default {
  title: "필터",
  component: Filter,
  parameters: {
    componentSubtitle: "Filter 컴포넌트",
  },
};

export const defaultFilter = () => {
  return <Filter content="필터" />;
};
