interface IconProps {
    name?: string;
    width?: number;
    height?: number;
    fill?: string;
    rotated?: boolean;
}
interface RadioProps {
    label: string;
    value: string;
    disabled?: boolean;
}
type FormVariant = "text" | "number" | "email" | "password";
type AlignVariant = "stretch" | "center" | "start" | "end";
type JustifyVariant = "start" | "center" | "space-between" | "space-around" | "space-evenly";
export type { IconProps, RadioProps, FormVariant, AlignVariant, JustifyVariant, };
