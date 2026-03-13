"use client";

import styles from './About.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutBlock}>
        <div className={styles.aboutImage}>
          <Image
            src="/images/about-portrait.webp"
            alt="Company founder portrait"
            width={180}
            height={260}
            className={styles.img}
          />
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.title}>About Us</div>
          <div className={styles.text}>
            Our mission is to help people feel confident and healthy every day. We believe in the power of natural ingredients and innovative skincare solutions.
          </div>
          <ul className={styles.list}>
            <li><span className={styles.check}></span> Dermatologist approved formulas</li>
            <li><span className={styles.check}></span> Visible results after first use</li>
            <li><span className={styles.check}></span> Eco-friendly packaging</li>
            <li><span className={styles.check}></span> 24/7 customer support</li>
          </ul>
          <div className={styles.buttonBlock}>
            <button className={styles.ctaButton} onClick={() => setModalOpen(true)}>
              Claim your custom discount<br />
              <span className={styles.limited}>Limited time</span>
            </button>
          </div>
        </div>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
