import React from "react";
interface BreadcrumbsProps {
    list: string[] | React.ReactNode[];
    current?: string | React.ReactNode;
    separator?: string | React.ReactNode;
}
export type { BreadcrumbsProps };
