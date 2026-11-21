import { CookingPot, Wallet, type LucideIcon } from "lucide-react";

export type Section = {
  label: string;
  href: string;
  icon: LucideIcon;
};

/** Botões da home. Para adicionar uma seção, inclua um item aqui. */
export const sections: readonly Section[] = [
  { label: "Cozinha", href: "/cozinha", icon: CookingPot },
  { label: "Finanças", href: "/financas", icon: Wallet },
];
