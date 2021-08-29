import styles from './greeting.module.scss';

export default function Greeting() {

  return (
    <div>
      <p>Hello! I&apos;m <span className={styles.line1}>Sveinn</span>.</p
      ><p>A <span className={styles.line2}>fresh university graduate</span></p
      ><p>with a <span className={styles.line3}>B.Sc. degree</span></p
      ><p>in <span className={styles.line4}>Software Engineering</span></p
      ><p>from the <span className={styles.line5}>University of Iceland</span>.</p>
    </div>
  );
}
