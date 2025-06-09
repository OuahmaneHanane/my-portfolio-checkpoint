import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>My Projects</h1>

        {/* Image Gallery Grid */}
        <section className={styles.imageGrid}>
          <Image
            src="/restaurant.png"
            alt="codin process"
            width={350}
            height={250}
            className={styles.projectImage}
          />
           <Image
            src="/code.jpg"
            alt="Restaurant Website Screenshot"
            width={350}
            height={250}
            className={styles.projectImage}
          />
          <Image
            src="/weather-app.png"
            alt="Weather App Screenshot"
            width={350}
            height={250}
            className={styles.projectImage}
          />
        </section>

        {/* Project Info Grid */}
        <section className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h2>Portfolio Website</h2>
            <p>A personal portfolio built using Next.js and React.</p>
            <p><strong>Tech:</strong> Next.js, CSS</p>
            <a href="https://github.com/OuahmaneHanane/my-portfolio-checkpoint.git" target="_blank" rel="noopener noreferrer" className={styles.link}>
              View Code
            </a>
          </div>

          <div className={styles.projectCard}>
            <h2>🌍 Travel Agency & 🍽️ Restaurant Websites</h2>
            <p>Two responsive websites built with Bootstrap in one repo.</p>
            <ul>
              <li><strong>Travel Agency:</strong> Displays travel packages & destinations.</li>
              <li><strong>Restaurant:</strong> Includes a hero, menu, and reservation info.</li>
            </ul>
            <p><strong>Tech:</strong> HTML, CSS, Bootstrap</p>
            <a href="https://github.com/OuahmaneHanane/travel-Agency_Fictional-Restaurant.git" target="_blank" rel="noopener noreferrer" className={styles.link}>
              View Code
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
