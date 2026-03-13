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
            Studies show that reading books regularly reduces feelings of loneliness and lowers the risk of depression. Just a few pages a day can make a real difference.
          </div>
        </div>
      </div>
      <div className={styles.stepBlock}>
        <div className={styles.stepTextLeft}>
          <div className={styles.stepTitle}><b>2. Paragraph control is effortless</b></div>
          <div className={styles.stepDesc}>
            Engaging with books helps improve focus and emotional balance, making it easier to manage stress and enjoy everyday moments.
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
