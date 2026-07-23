import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Deck Mármores e Granitos | Pedras que se tornam legado",
    template: "%s | Deck Mármores e Granitos",
  },
  description:
    "Há 40 anos, a Deck seleciona, transforma e instala mármores, granitos, quartzitos, ônix e superfícies para projetos que não aceitam o comum.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
      { url: "/deck-favicon-v11.png?v=11", type: "image/png", sizes: "256x256" },
    ],
    shortcut: ["/favicon.ico?v=11"],
    apple: [
      { url: "/apple-touch-icon-v11.png?v=11", type: "image/png", sizes: "180x180" },
    ],
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