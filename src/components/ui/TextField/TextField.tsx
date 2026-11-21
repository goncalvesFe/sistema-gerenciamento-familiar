import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./TextField.module.css";

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id: string;
  label: string;
  /** Elemento exibido dentro do campo, à direita (ex.: botão de mostrar senha). */
  trailing?: ReactNode;
};

export function TextField({
  id,
  label,
  trailing,
  className,
  type = "text",
  ...inputProps
}: TextFieldProps) {
  const inputClasses = [styles.input, trailing && styles.withTrailing, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.control}>
        <input id={id} type={type} className={inputClasses} {...inputProps} />
        {trailing && <div className={styles.trailing}>{trailing}</div>}
      </div>
    </div>
  );
}
