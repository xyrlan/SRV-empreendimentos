import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/navItems";
import { ModeToggle } from "@/components/mode-toggle";
import Footer from "@/components/Footer";

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
          <FloatingNav navItems={navItems} />
          <ModeToggle />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
