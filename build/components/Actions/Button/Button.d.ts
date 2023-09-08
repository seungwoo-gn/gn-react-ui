import React from "react";
type ButtonVariant = "primary" | "secondary" | "tertiary" | "disabled" | "disabledOnSurface";
type SizeVariant = "small" | "medium" | "large" | "header" | "custom";
type TypeVariant = "button" | "submit" | "reset";
interface ButtonProps {
    mode: ButtonVariant;
    size?: SizeVariant;
    type?: TypeVariant;
    disabledColor?: string;
    disabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    custom?: {
        padding?: string;
        fontSize?: string;
        borderRadius?: number;
        height?: number;
        background?: string;
        fontWeight?: number;
        width?: boolean;
    };
}
declare function Button(props: ButtonProps): React.JSX.Element;
export { Button };
