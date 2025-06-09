import React from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="contact">
        <h1>Contact Me</h1>
        <p>If you'd like to get in touch, you can reach me at:</p>
        <a href="ouahmaneh2@gmail.com">ouahmaneh2@gmail.com</a>
        <a href="https://www.linkedin.com/in/hanane-ouahmane-265383341/">LinkedIn</a>
        <a href="https://github.com/OuahmaneHanane" target="_blank" rel="noopener noreferrer">GitHub</a>
      </main>
    </>
  );
}