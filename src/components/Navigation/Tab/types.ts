import React from "react";

interface CommonTabProps {
  tabNames: string[] | React.ReactNode[];
  tabIdx: number;
  changeTabIdx: (index: number) => void;
  backgroundColor?: string;
  children: React.ReactNode;
}

interface TabItemProps {
  tabIdx: number;
  value: number;
  children: React.ReactNode;
}

export type { CommonTabProps, TabItemProps };
