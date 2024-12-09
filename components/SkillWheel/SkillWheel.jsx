'use client';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './SkillWheel.module.css';

export default function SkillWheel({ skill, level }) {
  const getProficiencyIcon = (level) => {
    if (level > 70) return { icon: '🔥', label: 'Proficient' };
    if (level > 40) return { icon: '⚡', label: 'Intermediate' };
    return { icon: '🌱', label: 'Novice' };
  };

  const { icon, label } = getProficiencyIcon(level);

  return (
    <div className={styles.skill}>
      <div className={styles.circularContainer}>
        <CircularProgressbar
          value={level}
          text={""}
          styles={buildStyles({
            pathColor: '#ff7f50',
            trailColor: '#f5f5f5',
            strokeLinecap: 'round',
          })}
        />
        <div className={styles.centerContent}>
          <span className={styles.icon}>{icon}</span>
        </div>
      </div>
      <h3 className={styles.skillName}>{skill}</h3>
      <p className={styles.proficiencyLabel}>{label}</p>
    </div>
  );
}
