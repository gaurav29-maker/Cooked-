import type { Metadata } from "next";
import { Lato, Libre_Baskerville, Great_Vibes } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Cooked with Care | Fresh Vegetarian Meals in Mumbai",
  description: "Cooked with Care delivers fresh, healthy vegetarian meals across Mumbai. Minimal oil cooking, traditional recipes, daily fresh preparations. Order via WhatsApp.",
  keywords: "vegetarian food Mumbai, healthy meals Mumbai, low oil cooking, home cooked food delivery, tiffin service Mumbai, corporate catering Mumbai",
  authors: [{ name: "Cooked with Care" }],
  openGraph: {
    title: "Cooked with Care | Fresh Vegetarian Meals in Mumbai",
    description: "Fresh, healthy vegetarian meals made with minimal oil. Serving Mumbai for four years. Order via WhatsApp.",
    url: "https://cookedwithcare.in/",
    siteName: "Cooked with Care",
    images: [
      {
        url: "/cooked with care logo without background.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cooked with Care | Fresh Vegetarian Meals in Mumbai",
    description: "Fresh, healthy vegetarian meals made with minimal oil. Serving Mumbai for four years.",
    images: ["/cooked with care logo without background.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${libreBaskerville.variable} ${greatVibes.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
