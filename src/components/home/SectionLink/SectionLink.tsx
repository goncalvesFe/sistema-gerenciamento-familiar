import Link from "next/link";
import type { Section } from "@/config/sections";
import styles from "./SectionLink.module.css";

type SectionLinkProps = Section;

export function SectionLink({ label, href, icon: Icon }: SectionLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      <Icon className={styles.icon} aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}
