import styles from './About.module.css';

export const metadata = {
  title: 'About | Mahir Khan Portfolio',
};

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>

      <div className={styles.content}>
        <img
          src="/profile.jpg"
          alt="Mahir Khan"
          className={styles.profileImage}
        />

        <div className={styles.text}>
          <p>
            Hi, I&#39;m Mahir Khan, a junior software engineer specializing in
            web development and full-stack applications. 
          </p>

         <p className={styles.text}>When I&#39;m not coding, you'll find me:</p>

        <ul className={styles.text}>
          <li>🏐 Playing beach volleyball with my family on cloudy days</li>
          <li>🏋️ Hitting the gym to relieve stress and crush fitness goals</li>
          <li>🍳 Cooking new recipes, experimenting with flavors, and sharing meals</li>
          <li>
            ✍️ Writing
            <a
              href="https://medium.com/@mahirkhan0828"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.blogLink}
            >
              blogs
            </a>
          </li>
          <li>🏀 Watching NBA games, go Rockets!</li>
        </ul>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/mahirkhan0828"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mahir-khan-20776a199/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a
              href="mailto: mahirkhan0828@gmail.com"
              className={styles.link}
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
