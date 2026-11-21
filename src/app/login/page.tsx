import { LoginForm } from "@/components/login/LoginForm/LoginForm";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <LoginForm />
    </main>
  );
}
