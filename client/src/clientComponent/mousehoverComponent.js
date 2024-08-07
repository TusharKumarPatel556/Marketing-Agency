"use client";
import { useEffect } from "react";
import styles from "../style/mousehover.module.css";

export default function MouseHover() {
  useEffect(() => {
    const mouseBox = document.getElementById("mouse-box");

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      mouseBox.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div id="mouse-box" className={styles.mouseBox}></div>
    </main>
  );
}
