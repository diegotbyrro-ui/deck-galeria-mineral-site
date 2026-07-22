import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Deck Mármores e Granitos | Pedras que se tornam legado",
    template: "%s | Deck Mármores e Granitos",
  },
  description:
    "Há 40 anos, a Deck seleciona, transforma e instala mármores, granitos, quartzitos, ônix e superfícies para projetos que não aceitam o comum.",
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
