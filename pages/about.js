import Head from "next/head";
import styles from "../styles/Movies.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
      </Head>
      <h1>About</h1>
    </div>
  );
}
