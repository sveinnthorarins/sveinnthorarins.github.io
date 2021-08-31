import Portrait from '@/components/portrait';
import Greeting from '@/components/greeting';
import styles from './introduction.module.scss';
import Script from 'next/script';
import FallingStarsVisualization from '@/components/fallingstarsvisualization';

export default function Introduction() {
  
  function scrollToProjects() {
    let projectsElement = document.getElementById('projects');
    if (projectsElement === null) return;
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: projectsElement.offsetTop - (window.innerHeight*0.15),
    });
  }
  
  return (
    <section className={styles.introduction}>
      <FallingStarsVisualization className={styles.canvas} />
      <div className={styles.portrait}>
        <Portrait />
      </div>
      <div className={styles.greeting}>
        <Greeting />
      </div>
      <div className={styles.arrowcontainer} onClick={scrollToProjects}>
        <div className={styles.arrow}></div>
      </div>
      <Script src="/fsbundle.js"></Script>
    </section>
  );
}
