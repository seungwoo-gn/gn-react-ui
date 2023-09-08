import React from "react";
interface FullSizeLayoutProps {
    headerTitle: string;
    headerTab?: React.ReactNode;
    previousPage?: boolean;
    AdditionalTab?: number;
    children: React.ReactNode;
}
interface FullSizeModalLayoutProps {
    headerTitle: string;
    isBottom?: number;
    bottomButton?: React.ReactNode;
    previousPage?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
}
export type { FullSizeLayoutProps, FullSizeModalLayoutProps };
