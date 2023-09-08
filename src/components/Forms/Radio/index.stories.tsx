import React, { useState } from "react";
import { RadioProps } from "../../../types/common";
import { Radio } from "./Radio";

export default {
  title: "라디오",
  component: Radio,
  parameters: {
    componentSubtitle: "Radio 컴포넌트",
  },
};

const options: RadioProps[] = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" },
];

export const defaultRadio = () => {
  const [value, setValue] = useState<string>("Apple");

  const handleChangeValue = (value: string) => {
    setValue(value);
  };

  return <Radio list={options} onChange={handleChangeValue} value={value} />;
};
