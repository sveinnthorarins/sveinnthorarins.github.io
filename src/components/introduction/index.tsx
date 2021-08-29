import Portrait from '@/components/portrait';
import Greeting from '@/components/greeting';
import styles from './introduction.module.scss';
import Script from 'next/script';
import FallingStarsVisualization from '@/components/fallingstarsvisualization';

export default function Introduction() {
  
  return (
    <section className={styles.introduction}>
      <FallingStarsVisualization className={styles.canvas} />
      <div className={styles.portrait}>
        <Portrait />
      </div>
      <div className={styles.greeting}>
        <Greeting />
      </div>
      <Script src="/fsbundle.js"></Script>
    </section>
  );
}
