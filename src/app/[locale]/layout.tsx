import "../globals.css";
import { Inter } from "next/font/google";

import Navbar from "../../components/blocks/navbar";
import { ReactNode } from "react";

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
        <div className="container mx-auto mb-9">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
