import "../global.css";

import type { Metadata } from "next";

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
    "PRNGRFX",
    "ERG Bruxelles",
  ],
  authors: [{ name: "Kalimero Von Bülow", url: "https://kalimero.ink" }],
  creator: "Kalimero Von Bülow",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://kalimero.ink",
    title: "Kalimero Von Bülow",
    description:
      "Artiste underground, comiXmaker, graphiste. Portraits sur commande à partir de 60€.",
    siteName: "Kalimero Von Bülow",
    images: [
      {
        url: "/showcase-kalimero-ink.jpg",
        width: 1200,
        height: 630,
        alt: "Kalimero Von Bülow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalimero Von Bülow",
    description:
      "Artiste underground, comiXmaker, graphiste. Portraits sur commande à partir de 60€.",
    images: ["/showcase-kalimero-ink.jpg"],
  },
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";


export const metadata: Metadata = {
	title: {
		default: "kalimero.ink",
		template: "%s |kalimero.ink",
	},
	description: "Wild at Art ComiXmaker since 1999",
	openGraph: {
		title: "kalimero.ink",
		description:
			"Wild at Art ComiXmaker since 1999",
		url: "https://kalimero.ink",
		siteName: "kalimero.ink",
		images: [
			{
				url: "https://kalimero.ink/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "fr-FR",
		type: "website",
	},
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
	twitter: {
		title: "Kalimero_666_",
		card: "summary_large_image",
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kalimero Von Bülow",
    alternateName: ["Kalimero", "Olivier Quéméré", "kalimero_666"],
    url: "https://kalimero.ink",
    sameAs: [
      "https://kalimero-station-service.vercel.app/",
      "https://www.instagram.com/kalimero_____666/",
      "https://graphics.social/@kalimero",
      "https://www.artmajeur.com/olivier-kalimero-quemere",
      "https://linktr.ee/kalimero",
      "https://www.linkedin.com/in/kalimero666",
      "https://youtube.com/@kalimero_666",
    ],
    jobTitle: "Artiste, ComiXmaker, Graphiste",
    description:
      "Artiste underground belge, comiXmaker, graphiste diplômé de l'ERG (Ecole de Recherche Graphique) à Bruxelles.",
    email: "kalimero@ik.me",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
			}
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
