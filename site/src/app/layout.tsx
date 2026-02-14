import type { Metadata } from "next";
import { IBM_Plex_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enter the Render | Archviz Studio",
  description:
    "Entre o pixel e o concreto, construimos realidades paralelas. Studio de visualizacao arquitetonica com Unreal Engine 5, 3DS Max e AI Generativa.",
  keywords: [
    "archviz",
    "visualizacao arquitetonica",
    "render 3d",
    "unreal engine",
    "3ds max",
    "arquitetura",
    "imersao 3d",
    "realidade virtual",
    "ai generativa",
    "studio 3d",
  ],
  authors: [{ name: "Enter the Render" }],
  creator: "Enter the Render",
  publisher: "Enter the Render",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://entertherender.com",
    siteName: "Enter the Render",
    title: "Enter the Render | Archviz Studio",
    description:
      "Entre o pixel e o concreto, construimos realidades paralelas. Studio de visualizacao arquitetonica.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enter the Render - Building Worlds. Rendering Futures.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enter the Render | Archviz Studio",
    description:
      "Entre o pixel e o concreto, construimos realidades paralelas.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://entertherender.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${ibmPlexMono.variable} ${orbitron.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
