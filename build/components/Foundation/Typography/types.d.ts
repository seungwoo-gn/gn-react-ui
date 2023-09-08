import { AlignVariant } from "../../../types/common";
import React from "react";
interface TypographyProps {
    weight?: number;
    size?: number;
    color?: string;
    height?: number;
    align?: AlignVariant;
    inline?: boolean;
    children: React.ReactNode;
}
export type { TypographyProps };
