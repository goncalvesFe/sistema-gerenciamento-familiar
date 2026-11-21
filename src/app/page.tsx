import { SectionLink } from "@/components/home/SectionLink/SectionLink";
import { sections } from "@/config/sections";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <nav aria-label="Seções" className={styles.nav}>
        {sections.map((section) => (
          <SectionLink key={section.href} {...section} />
        ))}
      </nav>
    </main>
  );
}
