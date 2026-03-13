"use client";
import styles from './FAQ.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export default function FAQ() {
  const [open, setOpen] = useState(false);
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqBlock}>
        <div className={styles.faqImage}>
          <Image
            src="/images/faq-offer.webp"
            alt="Special offer face patches"
            width={320}
            height={320}
            className={styles.img}
          />
        </div>
        <div className={styles.faqContent}>
          <div className={styles.specialOffer}>SPECIAL OFFERS</div>
          <div className={styles.boldLine}>Try out the generic <br/> placeholder now!</div>
          <div className={styles.summerDeals}>SUMMER DEALS</div>
          <div className={styles.desc}>
            Noticeable effect even on normal skin — see the difference after just one use!
          </div>
          <button className={styles.ctaButton} onClick={() => setOpen(true)}>Receive a 50% discount</button>
          <div className={styles.smallNote}>
            *Our patches are enriched with natural extracts for maximum skin benefit.
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
