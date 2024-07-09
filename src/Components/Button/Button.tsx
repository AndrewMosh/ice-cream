import { FC, ButtonHTMLAttributes } from "react";
import "./Button.scss";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ label, onClick, ...props }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = buttonRef.current;

        if (button) {
            // Анимация кнопки при наведении
            const tl = gsap.to(button, {
                duration: 0.3,
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
                ease: "power2.out",
                paused: true,
            });

            const onMouseEnter = () => tl.play();
            const onMouseLeave = () => tl.reverse();

            // Привязка обработчиков событий
            button.addEventListener("mouseenter", onMouseEnter);
            button.addEventListener("mouseleave", onMouseLeave);

            // Очистка обработчиков событий при размонтировании компонента
            return () => {
                button.removeEventListener("mouseenter", onMouseEnter);
                button.removeEventListener("mouseleave", onMouseLeave);
            };
        }
    }, []);

    return (
        <button ref={buttonRef} className="button" onClick={onClick} {...props}>
            {label}
        </button>
    );
};

export default Button;
