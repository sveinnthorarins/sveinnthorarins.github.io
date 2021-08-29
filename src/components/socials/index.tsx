import styles from './socials.module.scss';

type SocialsProps = {
  orientation: string;
};

export default function Socials({ orientation }: SocialsProps) {

  if (orientation === undefined) 
    throw Error("Socials component must be given an orientation property.");
  if (!(orientation === "horizontal" || orientation === "vertical")) 
    throw Error("Invalid value for orientation property of Socials component. The only valid values are 'horizontal' and 'vertical'.");

  return (
    <div className={orientation === "horizontal" ? styles.hsocials : styles.vsocials}>
      <a className={styles.button} href="https://github.com/sveinnthorarins" target="_blank" rel="noreferrer" aria-label="github">
        <svg aria-hidden="true" viewBox="0 0 16 16" width="100%" height="100%">
          <path style={{ fillRule: "evenodd" }} d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </a>
      <a className={styles.button} href="https://www.linkedin.com/in/sveinn-%C3%BE%C3%B3rarinsson-b7a63120a/" target="_blank" rel="noreferrer" aria-label="linkedin">
        <svg aria-hidden="true" viewBox="0 0 34 34" width="100%" height="100%">
          <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"/>
        </svg>
      </a>
      <a className={styles.button} href="https://www.facebook.com/profile.php?id=1661051195" target="_blank" rel="noreferrer" aria-label="facebook">
        <svg aria-hidden="true" viewBox="0 0 269 269" width="100%" height="100%">
          <path d="M 124.75 1.525 c -21.925 1.65 -43.475 8.75 -61.5 20.275 c -14.2 9.075 -26.1 20.125 -35.975 33.425 c -23.675 31.85 -31.85 72.85 -22.25 111.525 c 4.9 19.8 14 37.625 27.5 53.875 c 2.8 3.4 12.675 13.225 16.225 16.15 c 17.45 14.475 37.325 24.075 58.975 28.475 c 2.7 0.55 5.1 1 5.35 1 c 0.4 0 0.425 -2.7 0.425 -46.5 l 0 -46.5 l -16.875 0 l -16.875 0 l 0 -19.375 l 0 -19.375 l 16.875 0 l 16.875 0 l 0 -15.575 c 0 -8.55 0.125 -17.125 0.25 -19.05 c 1.075 -14.475 5.825 -25.65 14.4 -33.85 c 7 -6.675 15.95 -10.675 27.6 -12.325 c 3.4 -0.475 15.15 -0.4 21 0.15 c 4.9 0.45 13.075 1.45 15.7 1.925 l 1.55 0.275 l 0 16.35 l 0 16.35 l -9.125 0 c -5.025 0 -10.225 0.125 -11.55 0.275 c -10.675 1.175 -16.8 7.325 -17.825 17.875 c -0.125 1.35 -0.25 8.125 -0.25 15.025 l 0 12.575 l 18.5 0 c 17.45 0 18.5 0.025 18.5 0.425 c -0.025 0.25 -1.325 8.95 -2.95 19.325 l -2.925 18.875 l -15.55 0.075 l -15.575 0.05 l 0 46.5 c 0 45.925 0 46.5 0.475 46.5 c 0.275 0 2.225 -0.35 4.325 -0.75 c 22.525 -4.475 42.375 -14 60.325 -28.925 c 3.9 -3.225 12.1 -11.35 15.5 -15.325 c 17.35 -20.375 27.85 -44.575 31.15 -71.725 c 0.65 -5.4 0.925 -18.45 0.5 -24.325 c -1.9 -25.925 -11 -50.275 -26.475 -70.8 c -5.3 -7.025 -14.625 -16.85 -21.05 -22.15 c -22.125 -18.3 -47.85 -28.65 -76.5 -30.75 c -3.975 -0.3 -14.65 -0.275 -18.75 0.025 z"/>
        </svg>
      </a>
    </div>
  );
}
