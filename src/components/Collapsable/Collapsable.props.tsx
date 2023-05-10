import { ReactNode } from "react";

export interface CollapsableProps {
    open?: Boolean,
    startIcon?: ReactNode,
    children: ReactNode,
    title: string,
}
