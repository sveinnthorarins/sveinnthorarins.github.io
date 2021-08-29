import styles from './card.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type ShowcaseCardProps = {
  title: string,
  href?: string,
  imageSrc: StaticImageData,
  imageAlt: string,
  imageUnoptimized?: boolean,
};

export default function ShowcaseCard(props: ShowcaseCardProps) {
  if (props.href === undefined) return (
    <div className={styles.showcase__card}>
      <Image src={props.imageSrc} alt={props.imageAlt} unoptimized={props.imageUnoptimized === undefined ? false : props.imageUnoptimized} />
      <div className={styles.card__content}>
        <p className={styles.card__title}>{props.title}</p>
      </div>
    </div>
  );
  else return (
    <Link href={props.href}>
      <a className={styles.showcase__card}>
        <Image src={props.imageSrc} alt={props.imageAlt} unoptimized={props.imageUnoptimized === undefined ? false : props.imageUnoptimized} />
        <div className={styles.card__content}>
          <p className={styles.card__title}>{props.title}</p>
        </div>
      </a>
    </Link>
  );
}
