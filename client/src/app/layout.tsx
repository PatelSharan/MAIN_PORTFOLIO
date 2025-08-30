import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AutoRevealProvider from "@/components/common/AutoRevealProvider";

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: "Sharan Patel - Web Developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={lexend.className}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <div className="h-[calc(100vh_-_var(--navbar-height))] overflow-y-scroll scrollbar-none bg-DWLW text-DWLW">
            <AutoRevealProvider />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html >
  );
}
