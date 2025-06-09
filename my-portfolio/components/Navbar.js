import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS module

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <span className={styles.logo}>MyPortfolio</span>
        <div>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/projects" className={styles.link}>Projects</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}