import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className={styles.container}>
       {/*  Image with fill layout */}
        <div className={styles.bannerWrapper}>
          <Image
            src="/banner.jpg"
            alt="Portfolio Banner"
            fill // Fills the parent container
            priority // Loads it eagerly for better performance on homepage
            sizes="(max-width: 800px) 100vw, 800px"
            style={{ objectFit: 'cover' }} // Crop and scale to fill the box
          />
        </div>
        <h1 className={styles.title}>Hello, I'm Hanane Ouahmane</h1>
        <p className={styles.description}>I'm a web developer passionate about building modern and user-friendly web apps.</p>
        <a href="/projects" className={styles.ctaButton}>See My Work</a>
    </main>
    </>
  );
}
