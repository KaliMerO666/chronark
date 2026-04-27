import "../global.css";

import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://kalimero.ink"),
  title: {
    default: "Kalimero Von Bülow",
    template: "%s — Kalimero Von Bülow",
  },
  description:
    "Site officiel de Kalimero Von Bülow — artiste underground, comiXmaker, graphiste diplômé de l'ERG Bruxelles. Comics, portraits sur commande, art graphique.",
  keywords: [
    "Kalimero",
    "Kalimero Von Bülow",
    "Olivier Quéméré",
    "artiste underground",
    "comics",
    "bande dessinée",
    "portrait sur commande",
    "art graphique",
    "Porno",
    "Porn",
    "ERG Bruxelles",
  ],
  authors: [{ name: "Kalimero Von Bülow", url: "https://kalimero.ink" }],
  creator: "Kalimero Von Bülow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://kalimero.ink",
    title: "Kalimero Von Bülow",
    description:
      "Artiste underground, comiXmaker, graphiste. Portraits sur commande à partir de 60€.",
    siteName: "kalimero.ink",
    images: [
      {
        url: "https://kalimero.ink/og (1).jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "fr-FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalimero Von Bülow",
    description:
      "Artiste underground, comiXmaker, graphiste. Portraits sur commande à partir de 60€.",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kalimero Von Bülow",
    alternateName: ["Kalimero", "Olivier Quéméré", "kalimero_666"],
    url: "https://kalimero.ink",
    sameAs: [
      "https://kalimero-station-service.vercel.app/",
      "https://www.instagram.com/kalimero.ink/",
       "https://graphics.social/@kalimero",
      "https://www.artmajeur.com/olivier-kalimero-quemere",
      "https://linktr.ee/kalimero",
      "https://www.linkedin.com/in/kalimero666",
       "https://youtube.com/@kalimero_von_bulow",
    ],
    jobTitle: "Artiste, ComiXmaker, Graphiste",
    description:
      "Artiste underground breton, comiXmaker, graphiste diplômé de l'ERG (Ecole de Recherche Graphique) à Bruxelles.",
    email: "kalimero@ik.me",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <JsonLd />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}


