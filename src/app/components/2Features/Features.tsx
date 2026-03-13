import styles from './Features.module.scss';

const features = [
  'Natural Ingredients',
  'No Side Effects',
  'Fast Results',
  'Money-back Guarantee',
];

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.tableWrapper}>
        <table className={styles.featuresTable}>
          <thead>
            <tr>
              <th></th>
              <th>SELIDA</th>
              <th>Placeholder</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={feature}>
                <td className={styles.featureName}>{feature}</td>
                <td>
                  <span className={`${styles.icon} ${styles.iconCheck}`}></span>
                </td>
                <td>
                  <span className={`${styles.icon} ${styles.iconCross}`}></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
