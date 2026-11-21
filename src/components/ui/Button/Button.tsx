import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export function Button({
  fullWidth = false,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = [styles.button, fullWidth && styles.fullWidth, className]
    .filter(Boolean)
    .join(" ");

  return <button type={type} className={classes} {...props} />;
}
