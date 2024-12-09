import Head from 'next/head';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mahir Khan | Portfolio</title>
        <meta name="description" content="Mahir Khan's Personal Portfolio" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to My Portfolio</h1>
          <p className={styles.subtitle}>
          Full-Stack Engineer, Problem Solver
          </p>
          <a href="/projects" className={styles.cta}>
            View My Projects
          </a>
        </section>
        <section className={styles.contactPage}>
          <a href="mailto: mahirkhan0828@gmail.com" target="_blank">
          <img src="./logos/gmaillogo.png" alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/mahir-khan-20776a199/" target="_blank">
            <img src="./logos/linkedinlogo.png" alt="LinkedIn/" />
          </a>
          <a href="https://github.com/mahirkhan0828" target="_blank">
            <img src="./logos/githublogo.webp" alt="Github" />
          </a>
        </section>
      </main>
    </div>
  );
}
