import React from "react";
import { Checkbox, Typography } from "../../../index";

export default {
  title: "체크박스",
  component: Checkbox,
  parameters: {
    componentSubtitle: "Checkbox 컴포넌트",
  },
};

export const defaultCheckbox = () => {
  return (
    <div>
      <Checkbox
        label={<Typography size={24}>Checkbox</Typography>}
        labelKey="cb1"
      />
      <Checkbox
        label={<Typography size={24}>Checkbox2</Typography>}
        labelKey="cb2"
      />
      <Checkbox
        label={<Typography size={24}>Checkbox3</Typography>}
        labelKey="cb3"
      />
    </div>
  );
};
