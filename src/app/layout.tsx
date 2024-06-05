import "./globals.css";
import { Inter } from "next/font/google";

import Navbar from "../components/navbar";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <div className="container mx-auto mb-9">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
