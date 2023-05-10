import { ReactNode } from "react";

export interface TableProps {
  headers: string[];
  rows: any[];
  renderRow: (row: any) => ReactNode;
}
