import { AlignVariant, JustifyVariant } from "../../../types/common";
import React from "react";

interface SpacingProps {
  gap?: number;
  column?: boolean;
  align?: AlignVariant;
  justify?: JustifyVariant;
  cursor?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export type { SpacingProps };
