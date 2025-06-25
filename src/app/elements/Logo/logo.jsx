import React from "react"
import Link from 'next/link';
import styles from './logo.modules.css'; // Make sure this file exists

export default function Logo() {
  return (
    <div>
      <Link href="/" className={styles.logo}>HEXASHOP</Link>
    </div>
  );
}
