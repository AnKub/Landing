import styles from './Testimonial.module.scss';

export default function Testimonial() {
  return (
    <div className={styles.testimonial}>
      <div className={styles.avatarBlock}>
        <img
          className={styles.avatar}
          src="/images/ava-user.webp"
          alt="User avatar"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>Jane Doe</div>
        <div className={styles.date}>March 10, 2026</div>
        <div className={styles.comment}>
          I’ve tried many products, but these natural elements really made a difference! Highly recommend to everyone who values quality and results.
        </div>
      </div>
    </div>
  );
}
