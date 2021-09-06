import styles from './scrolllist.module.scss';
import { PropsWithChildren } from 'react';

export default function ScrollList(props: PropsWithChildren<{}>) {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {props.children}
      </div>
    </div>
  );
}
