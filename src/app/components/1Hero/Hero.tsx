import styles from './Hero.module.scss';
import Testimonial from './Testimonial/Testimonial';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          10 reasons why people CHOOSE NATURAL ELEMENTS placeholders $1000/month
        </h1>         
      </div>
     <Testimonial />
    </section>
  );
}
