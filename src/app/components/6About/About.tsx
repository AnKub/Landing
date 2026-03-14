"use client";

import styles from './About.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); 

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // показувати що часу для покупки за акційною ціною залишилося мало))
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutBlock}>
        <div className={styles.aboutImage}>
          <Image
            src="/images/about-portrait.webp"
            alt="Company founder portrait"
            width={380}
            height={460}
            className={styles.img}
          />
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.title}>About Us</div>
          <div className={styles.text}>
        Our mission is to help people feel confident and healthy every day. We believe in the power of natural ingredients and innovative skincare solutions. By combining science and nature, we strive to deliver products that truly make a difference. 
        <br/>Our commitment is to empower individuals to embrace their unique beauty, support their well-being, and inspire positive change in their daily lives.</div>
          <ul className={styles.list}>
            <li><span className={styles.check}></span> Dermatologist approved formulas</li>
            <li><span className={styles.check}></span> Visible results after first use</li>
            <li><span className={styles.check}></span> Eco-friendly packaging</li>
            <li><span className={styles.check}></span> 24/7 customer support</li>
          </ul>
          <div className={styles.buttonBlock}>
            <button className={styles.ctaButton} onClick={() => setModalOpen(true)}>
              Claim your custom discount<br />
              <span className={styles.limited}>{formatTime(timeLeft)}</span>
            </button>
          </div>
        </div>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
