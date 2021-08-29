import { PropsWithChildren } from 'react';
import styles from './title.module.scss';

export default function TextSectionTitle(props: PropsWithChildren<{}>) {
  
  return (
    <p className={styles.title}>
      {props.children}
    </p>
  );
}
