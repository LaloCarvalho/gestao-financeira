import React from "react";
import { PurpleButton } from "./styles";

interface buttonProps {
  onClick: (e: any) => void;
  children: string;
}

const button: React.FC<buttonProps> = ({ onClick, children }: buttonProps) => {
  return (
    <PurpleButton variant="contained" onClick={onClick}>
      {children}
    </PurpleButton>
  );
};

export default button;
