import type { Metadata } from "next";
import { Inter, Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ModeToggle } from "@/components/mode-toggle";
import Footer from "@/components/Footer";
import Providers from "@/components/progressbar-provider";

const inter = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s - SRV Empreendimentos"
  },
  alternates: {
    canonical: 'https://srvempreendimentos.com.br',
  },
  description: "Uma Consultoria Empresarial dedicada ao mercado de estratégia, finanças corporativas e análises de mercado.",
  openGraph: {
    title: "SRV Empreendimentos",
    description: "Uma Consultoria Empresarial dedicada ao mercado de estratégia, finanças corporativas e análises de mercado.",
    url: "https://srvempreendimentos.com.br",
    siteName: "SRV Empreendimentos",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <FloatingNav />
          <ModeToggle />
          <Providers>
            {children}
          </Providers>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
