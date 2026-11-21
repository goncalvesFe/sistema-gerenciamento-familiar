"use client";

import { useState, type ComponentProps } from "react";
import { Eye, EyeOff } from "lucide-react";
import { TextField } from "@/components/ui/TextField/TextField";
import styles from "./PasswordField.module.css";

type PasswordFieldProps = Omit<
  ComponentProps<typeof TextField>,
  "type" | "trailing"
>;

export function PasswordField(props: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const Icon = visible ? EyeOff : Eye;

  return (
    <TextField
      {...props}
      type={visible ? "text" : "password"}
      trailing={
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
          aria-controls={props.id}
        >
          <Icon className={styles.icon} aria-hidden="true" />
        </button>
      }
    />
  );
}
