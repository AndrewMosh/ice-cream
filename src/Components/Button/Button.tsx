import { FC, ButtonHTMLAttributes } from "react";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ label, onClick, ...props }) => {
    return (
        <button className="button" onClick={onClick} {...props}>
            {label}
        </button>
    );
};

export default Button;
