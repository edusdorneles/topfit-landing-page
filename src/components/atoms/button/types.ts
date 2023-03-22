import { ButtonHTMLAttributes } from "react";

export interface Props extends ButtonHTMLAttributes<any> {
    className?: string;
    secondary?: boolean;
}
