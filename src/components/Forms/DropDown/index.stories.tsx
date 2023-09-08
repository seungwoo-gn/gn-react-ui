import React, { useState } from "react";
import { DropDown, Typography } from "../../../index";

const list = [
  <Typography key={0} color="#000">
    Other 1
  </Typography>,
  <Typography key={1} color="red">
    Other 2
  </Typography>,
  <Typography key={2} color="blue">
    Other 3
  </Typography>,
  <Typography key={3} color="green">
    Other 4
  </Typography>,
  <Typography key={4} color="yellow">
    Other 5
  </Typography>,
];

export default {
  title: "드롭다운",
  component: DropDown,
  parameters: {
    componentSubtitle: "Filter 컴포넌트",
  },
};

export const defaultDropDown = () => {
  const [main, setMain] = useState<React.ReactNode>(
    <Typography color="#000">Main</Typography>,
  );
  return <DropDown main={main} setMain={setMain} list={list} />;
};
