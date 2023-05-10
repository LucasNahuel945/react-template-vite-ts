import { MouseEventHandler, ReactNode } from "react";

export interface ModalProps {
    isOpen?: boolean,
    testid?: string;
    onClose: MouseEventHandler,
    children: ReactNode,
}