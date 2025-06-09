import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <h1>About Me</h1>
        <p>
          I’m a full-stack developer with a background in computer science. I love building modern,
          user-friendly web applications and solving real-world problems with code.
        </p>
        <h2>Technologies I Use</h2>
        <ul>
          <li>JavaScript / React / Next.js</li>
          <li>Node.js / Express</li>
          <li>MongoDB / SQL</li>
          <li>HTML / CSS</li>
        </ul>
      </main>
    </>
  );
}