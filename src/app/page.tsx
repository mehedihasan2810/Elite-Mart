import Navbar from "@/components/shared-components/Navbar/Navbar";
import styles from "./page.module.css";

export default function Home() {
  console.log('foo')
  return (
    <main className={styles.main}>
      <Navbar/>
     
    </main>
  );
}
