import React, { useState } from "react";
import { CommonTab, TabItem } from "./index";
import { Icon } from "../../Foundation/Icon";

export default {
  title: "탭",
  component: CommonTab,
  parameters: {
    componentSubtitle: "Tab 컴포넌트",
  },
};

export const defaultTab = () => {
  const [tabIdx, setTabIdx] = useState<number>(0);

  const changeTabIdx = (index: number) => {
    setTabIdx(index);
  };

  return (
    <CommonTab
      tabNames={["common", "tab"]}
      tabIdx={tabIdx}
      changeTabIdx={changeTabIdx}
    >
      <TabItem tabIdx={0} value={tabIdx}>
        12345678
      </TabItem>
      <TabItem tabIdx={1} value={tabIdx}>
        가나다라마바사
      </TabItem>
    </CommonTab>
  );
};

export const defaultComponentTab = () => {
  const [tabIdx, setTabIdx] = useState<number>(0);

  const changeTabIdx = (index: number) => {
    setTabIdx(index);
  };

  return (
    <CommonTab
      key={tabIdx + new Date().getTime()}
      tabNames={[
        <Icon key={tabIdx + 1 + new Date().getTime()} name="DirectionRight" />,
        <Icon key={tabIdx + 2 + new Date().getTime()} name="Close" />,
      ]}
      tabIdx={tabIdx}
      changeTabIdx={changeTabIdx}
    >
      <TabItem tabIdx={0} value={tabIdx}>
        12345678
      </TabItem>
      <TabItem tabIdx={1} value={tabIdx}>
        가나다라마바사
      </TabItem>
    </CommonTab>
  );
};
