import styles from './Steps.module.scss';
import Image from 'next/image';

export default function Steps() {
  return (
    <section className={styles.stepsSection}>
      <div className={styles.intro}>
       Discover how using face patches can transform your life and boost your well-being. Experience visible improvements in your skin’s texture and overall health. With regular use, you’ll feel more confident, refreshed, and ready to embrace every new day.   </div>
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
            Studies show that using face patches regularly reduces signs of fatigue and helps revitalize your skin. Just a few minutes a day can make a real difference.<br />
            <br/>You’ll notice your skin feels smoother and looks brighter. Many users report improved mood and self-confidence after only a week.
            Consistency is key — make it a daily habit and enjoy lasting results.
          </div>
        </div>
      </div>
      <div className={styles.stepBlock}>
        <div className={styles.stepTextLeft}>
          <div className={styles.stepTitle}><b>2. Paragraph control is effortless</b></div>
         <div className={styles.stepDesc}>
            Using face patches helps restore skin balance and freshness, making it easier to feel confident and enjoy every day with a healthy glow.<br />
            <br />The patches are gentle and suitable for all skin types. You’ll feel more comfortable in your own skin, ready to face new challenges.
            Experience the difference with natural care and see how your routine becomes simpler and more enjoyable.
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
