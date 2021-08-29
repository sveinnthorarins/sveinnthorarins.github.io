import styles from './footer.module.scss';
import Socials from '@/components/socials';

export default function Footer() {
  
  return (
    <section className={styles.wrapper}>
      <div className={styles.spacing}></div>
      <svg viewBox="0 0 100 102" preserveAspectRatio="none" className={styles.svg}>
        <path stroke="white" fill="white" d="M0 0 L50 100 L100 0 Z" />
      </svg>
      <div className={styles.footercontainer}>
        <div className={styles.footer}>
          <Socials orientation="horizontal" />
          <p className={styles.copyright}>Copyright &copy; 2021 Sveinn Thorarinsson</p>
        </div>
      </div>
    </section>
  );
}
