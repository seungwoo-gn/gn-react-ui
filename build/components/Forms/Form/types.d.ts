import React from "react";
import { FormVariant } from "../../../types/common";
interface FormItemProps {
    title: string | React.ReactNode;
    placeholder?: string;
    value: any;
    onChange: (value: string) => void;
    required?: boolean;
    regex?: boolean;
    type?: FormVariant;
}
interface FormProps {
    gap?: number;
    onClick?: () => void;
    button?: React.ReactNode;
    children: React.ReactNode[];
}
export type { FormItemProps, FormProps };
