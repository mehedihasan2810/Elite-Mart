"use client";
import Hero from "@/components/pages-components/Home/Hero";
import styles from "./page.module.css";
import useHome from "@/hooks/pages/Home/useHome";
import NewArrival from "@/components/pages-components/Home/NewArrival";
import Category from "@/components/pages-components/Home/Category";
import Favorites from "@/components/pages-components/Home/Favorites";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  console.log(data);

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
