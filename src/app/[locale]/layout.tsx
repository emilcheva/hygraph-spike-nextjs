"use client";
import "../globals.css";
import { Inter } from "next/font/google";

import Navbar from "../../components/navbar";
import { ReactNode } from "react";
import { LocaleProvider } from "@/context/localeContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: any };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <LocaleProvider locale={locale}>
          <div className="container mx-auto mb-9">
            <Navbar />
            {children}
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
