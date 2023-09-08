import React, { useState } from "react";
import { Button, Form, FormItem } from "../../../index";

export default {
  title: "Form",
  component: Form,
  parameters: {
    componentSubtitle: "Form 컴포넌트",
  },
};

export const defaultForm = () => {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userNickName, setUserNickName] = useState<string>("");

  const handleChangeUserName = (value: string) => {
    setUserName(value);
  };

  const handleChangeUserPassword = (value: string) => {
    setUserPassword(value);
  };

  const handleChangeUserNickName = (value: string) => {
    setUserNickName(value);
  };

  return (
    <Form
      gap={10}
      button={
        <Button size="medium" mode="primary">
          가입
        </Button>
      }
    >
      <FormItem
        title="아이디"
        value={userName}
        onChange={handleChangeUserName}
        placeholder="아이디를 입력해주세요"
        type="text"
        regex
        required
      />
      <FormItem
        title="비밀번호"
        value={userPassword}
        onChange={handleChangeUserPassword}
        placeholder="비밀번호를 입력해주세요"
        type="password"
        regex
        required
      />
      <FormItem
        title="닉네임"
        value={userNickName}
        onChange={handleChangeUserNickName}
        placeholder="닉네임을 입력해주세요"
        type="text"
        regex={false}
        required={false}
      />
    </Form>
  );
};
