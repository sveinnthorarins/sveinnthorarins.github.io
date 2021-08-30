import portraitPhoto from '../../../public/me.jpg';
import styles from './portrait.module.scss';

export default function Portrait() {

  return (
    <img style={{ width: "100%", height: "100%" }} className={styles.portrait__image} src={portraitPhoto} alt="Image of Sveinn Thorarinsson" />
  );
}
