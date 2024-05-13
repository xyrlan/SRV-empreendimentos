import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ModeToggle } from "@/components/mode-toggle";
import Footer from "@/components/Footer";
import Providers from "@/components/progressbar-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SRV Empreendimentos | Home",
  description: "Uma Consultoria Empresarial dedicada ao mercado de estratégia, finanças corporativas e análises de mercado.",
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
