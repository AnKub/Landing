import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.logoCircle}>
        <span className={styles.logoText}>Selida</span>
      </div>
    </footer>
  );
}
