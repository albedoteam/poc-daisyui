import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src="https://www.smartbrain.com.br/hubfs/smartbrain.svg"
        alt="smartbrain"
        width={0}
        height={0}
      />
      <h2 className={styles.title}>Sign in to your account</h2>
    </div>
  );
}
