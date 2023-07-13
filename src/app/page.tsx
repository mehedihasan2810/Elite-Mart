 'use client'
 import Hero from "@/components/pages-components/Home/Hero";
import styles from "./page.module.css";
import useHome from "@/hooks/pages/Home/useHome";

export default function Home() {

  useHome();


  return (
    <main className={styles.main}>
       <Hero/>     
    </main>
  );
}
