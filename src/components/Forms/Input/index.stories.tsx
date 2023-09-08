import React, { useState } from "react";
import { TextInput } from "./TextInput";

export default {
  title: "인풋",
  component: TextInput,
  parameters: {
    componentSubtitle: "Input 컴포넌트",
  },
};

export const defaultInput = () => {
  const [value, setValue] = useState<string>("");

  const handleChangeValue = (value: string) => {
    setValue(value);
  };

  return (
    <TextInput
      onChange={handleChangeValue}
      value={value}
      type="text"
      placeholder="입력하시오"
    />
  );
};

export const errorInput = () => {
  const [value, setValue] = useState<string>("");

  const handleChangeValue = (value: string) => {
    setValue(value);
  };

  return (
    <TextInput
      onChange={handleChangeValue}
      value={value}
      type="text"
      error
      placeholder="입력하시오"
    />
  );
};
