import type { Metadata } from "next";
import "./globals.css";
import "../components/ui/vertical-carousel.css";

export const metadata: Metadata = {
  title: "FS Binhotti | Transporte e Terraplanagem",
  description:
    "Terraplanagem, escavação e transporte para transformar cada etapa da sua obra. Conheça a FS Binhotti.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
