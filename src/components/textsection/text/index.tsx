import { PropsWithChildren } from 'react';
import styles from './text.module.scss';

export default function TextSectionText(props: PropsWithChildren<{}>) {
  
  return (
    <p className={styles.text} {...props}>
      {props.children}
    </p>
  );
}
