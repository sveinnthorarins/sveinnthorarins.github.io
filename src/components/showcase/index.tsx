import styles from './showcase.module.scss';
import { PropsWithChildren } from 'react';

export default function Showcase(props: PropsWithChildren<{}>) {
  
  return (
    <div className={styles.showcase}>
      <div className={styles.showcase__flexrows}>
        {props.children}
      </div>
    </div>
  );
}
