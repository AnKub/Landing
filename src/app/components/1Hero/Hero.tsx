import styles from './Hero.module.scss';
import Testimonial from './Testimonial/Testimonial';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          10 REASONS WHY PEOPLE CHOOSE THESE NATURAL ELEMENTS ALONGSIDE PLACEHOLDERS $1000/MONTH
        </h1>
      </div>
      <Testimonial />
    </section>
  );
}
