import React from "react";
import "@/scss/globals.scss";
import { Work_Sans } from "next/font/google";
import Navbar from "@/components/shared-components/Navbar/Navbar";
import Footer from "@/components/shared-components/Footer";
import Providers from "@/providers/providers";

const work_Sans = Work_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={work_Sans.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
