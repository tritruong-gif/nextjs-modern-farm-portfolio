import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import CallToActionSection from "@/components/sections/CallToActionSectionV2";


export const metadata: Metadata = {
  title: 'Agrimo - Modern Farm Portfolio',
  description: 'A static portfolio site for a modern farm.',
  icons: '/images/logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CallToActionSection />
        <Footer />
      </body>
    </html>
  );
}
