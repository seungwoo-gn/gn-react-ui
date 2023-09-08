import React from "react";
import { Skeleton, Spacing } from "../../../index";

export default {
  title: "스켈레톤",
  component: Skeleton,
  parameters: {
    componentSubtitle: "Skeleton 컴포넌트",
  },
};

export const defulatSkeleton = () => {
  return (
    <Spacing gap={5} column>
      <Skeleton width={100} height={100} borderRadius={99} />
      <Skeleton width={300} height={100} />
      <Skeleton width={500} height={100} borderRadius={6} />
    </Spacing>
  );
};
