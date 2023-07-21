"use client";
import React, { useEffect } from "react";
// import './globals.css'
import "@/scss/globals.scss";
import { Work_Sans } from "next/font/google";
// import { Provider } from "react-redux";
// import { store } from "@/redux/store";
import Navbar from "@/components/shared-components/Navbar/Navbar";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Footer from "@/components/shared-components/Footer";
const lenis = new Lenis();

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
  useEffect(() => {
    // enable smooth scrolling with lenis
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <html lang="en">
      <body className={work_Sans.className}>
        {/* <Provider store={store}> */}
        <Navbar />
        {children}
        <Footer/>
        {/* </Provider> */}
      </body>
    </html>
  );
}
