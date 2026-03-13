import styles from './Steps.module.scss';
import Image from 'next/image';

export default function Steps() {
  return (
    <section className={styles.stepsSection}>
      <div className={styles.intro}>
        Discover how reading books can transform your daily life and boost your well-being.
      </div>
      <div className={styles.stepBlock}>
        <div className={styles.stepImageLeft}>
          <Image
            src="/images/step1.webp"
            alt="Reading reduces loneliness"
            width={320}
            height={220}
            className={styles.img}
          />
        </div>
        <div className={styles.stepTextRight}>
          <div className={styles.stepTitle}><b>1. Distractions disappear often within just one or two basic days</b></div>
          <div className={styles.stepDesc}>
            Studies show that using face patches regularly reduces signs of fatigue and helps revitalize your skin. Just a few minutes a day can make a real difference.
          </div>
        </div>
      </div>
      <div className={styles.stepBlock}>
        <div className={styles.stepTextLeft}>
          <div className={styles.stepTitle}><b>2. Paragraph control is effortless</b></div>
          <div className={styles.stepDesc}>
            Using face patches helps restore skin balance and freshness, making it easier to feel confident and enjoy every day with a healthy glow.
          </div>
        </div>
        <div className={styles.stepImageRight}>
          <Image
            src="/images/step2.webp"
            alt="Reading improves focus"
            width={320}
            height={220}
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
}
