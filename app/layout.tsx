import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed Portfolio",
  description: "this my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
      >
            {children}
          
      </ThemeProvider>
      </body>
      
    </html>
  );
}