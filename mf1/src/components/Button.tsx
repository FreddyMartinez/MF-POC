import { Button } from "@mui/material";
import { ReactNode } from "react";

export const MyButton = ({ children, onClick }: { children: ReactNode; onClick?: () => void }) => (
  <Button variant="outlined" onClick={onClick}>
    {children}
  </Button>
);
