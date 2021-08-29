import Image from 'next/image';
import portraitPhoto from '../../../public/me.jpg';
import styles from './portrait.module.scss';

export default function Portrait() {

  return (
    <Image className={styles.portrait__image} src={portraitPhoto} alt="Image of Sveinn Thorarinsson" quality="100" priority={true} unoptimized={true} />
  );
}
