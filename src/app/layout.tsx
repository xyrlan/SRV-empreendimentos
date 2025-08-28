import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/progressbar-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s - Barao & Saraiva"
  },
  alternates: {
    canonical: 'https://baraoesaraiva.com.br',
  },
  description: "Uma Consultoria Empresarial dedicada ao mercado de estratégia, finanças corporativas e análises de mercado.",
  openGraph: {
    title: "Barao & Saraiva",
    description: "Uma Consultoria Empresarial dedicada ao mercado de estratégia, finanças corporativas e análises de mercado.",
    url: "https://baraoesaraiva.com.br",
    siteName: "Barao & Saraiva",
    locale: "pt_BR",
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-poppins`}>
        <FloatingNav />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
