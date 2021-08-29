import styles from './multicolumnlist.module.scss';
import { PropsWithChildren } from 'react';


export default function MultiColumnList(props: PropsWithChildren<{}>) {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {props.children}
      </div>
    </div>
  );
}
