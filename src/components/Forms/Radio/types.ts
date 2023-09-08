import { RadioProps } from "../../../types/common";

interface StyledRadioProps {
  list: RadioProps[];
  value: string;
  onChange: (value: string) => void;
  column?: boolean;
}

export type { StyledRadioProps };
