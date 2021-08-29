import { PropsWithChildren } from 'react';
import styles from './heading.module.scss';

export default function TextSectionHeading(props: PropsWithChildren<{}>) {
  
  return (
    <p className={styles.heading} {...props}>
      {props.children}
    </p>
  );
}
