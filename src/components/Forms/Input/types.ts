import { FormVariant } from "../../../types/common";

interface TextInputProps {
  type: FormVariant;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
}

export type { TextInputProps };
