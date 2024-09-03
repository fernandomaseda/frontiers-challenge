import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import JoinAlert from "@/modules/JoinAlert";
import { Navbar } from "@/modules/Navbar";
import { Footer } from "@/modules/Footer";
import clsx from "clsx";
import { Chat } from "@/modules/chat";
import { AuthProvider } from "@/context/AuthContext";

const manrope = Manrope({
  weight: ["200", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const archia = localFont({
  src: [
    {
      path: "./a1f968e1d3dc7580-s.p.woff2", // Bold
      weight: "700",
      style: "normal",
    },
    {
      path: "./a6765d99cf0d9218-s.p.woff2", // Medium
      weight: "500",
      style: "normal",
    },
    {
      path: "./850b3098df78e846-s.p.woff2", // Regular
      weight: "400",
      style: "normal",
    },
    {
      path: "./2b31a7867605b4b5-s.p.woff2", // Semi-Bold
      weight: "600",
      style: "normal",
    },
    {
      path: "./3ecaeffc719d2c78-s.p.woff2", // Extra-Light
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-archia",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontiers Market",
  description: "Frontiers Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={clsx(manrope.className)}>
          <div className="bg-[#FBFAFA] relative min-h-[100dvh] flex w-full flex-col">
            <JoinAlert />
            <div className="flex w-full flex-col">
              <Navbar />
              {children}
              <Footer />
            </div>
            <Chat />
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
