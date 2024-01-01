"use client";
import Hero from "@/components/pages-components/Home/Hero";
import styles from "./page.module.css";
import useHome from "@/hooks/pages/Home/useHome";
import NewArrival from "@/components/pages-components/Home/NewArrival";
import Category from "@/components/pages-components/Home/Category";
import Favorites from "@/components/pages-components/Home/Favorites";

export default function Home() {
  useHome();

  return (
    <main className={styles.main}>
      <Hero />
      <NewArrival />
      <Category />
      <Favorites />
    </main>
  );
}
