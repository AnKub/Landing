"use client";

import { useState } from 'react';
import testimonData from './testimonialsData';
import styles from './Testimonial.module.scss';



export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(i => (i === 0 ? testimonData.length - 1 : i - 1));
  const next = () => setIndex(i => (i === testimonData.length - 1 ? 0 : i + 1));

  const t = testimonData[index];

  return (
    <div className={styles.testimonial}>
      <div className={styles.avatarBlock}>
        <img className={styles.avatar} src={t.avatar} alt="User avatar" />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{t.name}</div>
        <div className={styles.date}>{t.date}</div>
        <div className={styles.comment}>{t.comment}</div>
        <div className={styles.controls}>
          <button onClick={prev}>←</button>
          <button onClick={next}>→</button>
        </div>
      </div>
    </div>
  );
}