import React from "react";
import { Button } from "./Button";

export default {
  title: "버튼",
  component: Button,
  parameters: {
    componentSubtitle: "Button 컴포넌트",
  },
};

export const defaultButton = () => {
  return (
    <Button mode="primary" size="large">
      primary 버튼
    </Button>
  );
};

export const disabledButton = () => {
  return <Button mode="disabled">disabled 버튼</Button>;
};
