"use client";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const lenis = new Lenis();

import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // enable smooth scrolling with lenis
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
        <ToastContainer />
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
