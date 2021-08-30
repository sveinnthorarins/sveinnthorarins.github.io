import styles from './card.module.scss';
import Link from 'next/link';

type ShowcaseCardProps = {
  title: string,
  href?: string,
  imageSrc: any,
  imageAlt: string,
};

export default function ShowcaseCard(props: ShowcaseCardProps) {
  if (props.href === undefined) return (
    <div className={styles.showcase__card}>
      <img style={{ width: "100%", height: "100%" }} src={props.imageSrc} alt={props.imageAlt} />
      <div className={styles.card__content}>
        <p className={styles.card__title}>{props.title}</p>
      </div>
    </div>
  );
  else return (
    <Link href={props.href}>
      <a className={styles.showcase__card}>
        <img style={{ width: "100%", height: "100%" }} src={props.imageSrc} alt={props.imageAlt} />
        <div className={styles.card__content}>
          <p className={styles.card__title}>{props.title}</p>
        </div>
      </a>
    </Link>
  );
}
