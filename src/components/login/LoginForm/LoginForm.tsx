"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button/Button";
import { PasswordField } from "@/components/ui/PasswordField/PasswordField";
import { TextField } from "@/components/ui/TextField/TextField";
import styles from "./LoginForm.module.css";

export function LoginForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: autenticação
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField
        id="username"
        name="username"
        label="Usuário"
        autoComplete="username"
        autoCapitalize="none"
        spellCheck={false}
        required
      />
      <PasswordField
        id="password"
        name="password"
        label="Senha"
        autoComplete="current-password"
        required
      />
      <Button type="submit" fullWidth className={styles.submit}>
        Entrar
      </Button>
      <p className={styles.notice}>Acesso só por convite</p>
    </form>
  );
}
