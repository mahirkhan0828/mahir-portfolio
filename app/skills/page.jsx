'use client';

import SkillWheel from '../../components/SkillWheel/SkillWheel';
import styles from './Skills.module.css';
import { skills } from './util/skillsData';
import { useState } from 'react';

export default function SkillFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((skill) =>
          skill.categories.includes(selectedCategory)
        );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Skills</h1>

      <div className={styles.filterButtons}>
        {[
          'All',
          'Languages',
          'Frameworks/Libraries',
          'Databases',
          'Cloud Services',
          'Tools/Platforms',
        ].map((category) => (
          <button
            key={category}
            className={`${styles.filterBtn} ${
              selectedCategory === category ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.skillsContainer}>
        {filteredSkills.map(({ skill, level }) => (
          <SkillWheel key={skill} skill={skill} level={level} />
        ))}
      </div>
    </div>
  );
}
