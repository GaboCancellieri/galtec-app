import { ReactNode } from "react";

export interface TypographyProps {
  type: "title" | "paragraph";
  children: ReactNode;
}
