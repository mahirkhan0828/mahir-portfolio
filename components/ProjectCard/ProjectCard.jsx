import Link from 'next/link';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Link href={link} target="_blank" className={styles.button}>
          See Details
        </Link>
      </div>
    </div>
  );
}
