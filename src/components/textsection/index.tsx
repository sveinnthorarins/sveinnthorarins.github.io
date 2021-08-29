import { PropsWithChildren } from 'react';
import styles from './textsection.module.scss';

export default function TextSection(props: PropsWithChildren<{ id?: string }>) {
  
  return (
    <section id={props.id} className={styles.textsectioncontainer}>
      <div className={styles.textsection}>
        {props.children}
      </div>
    </section>
  );
}
