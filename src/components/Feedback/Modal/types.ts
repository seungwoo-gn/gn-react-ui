interface ModalProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  borderRadius?: number;
  padding?: string;
  backgroundColor?: string;
  okButton?: React.ReactNode;
  cancelButton?: React.ReactNode;
  onClose?: () => void;
}

export type { ModalProps };
