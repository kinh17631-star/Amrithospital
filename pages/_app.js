import "../styles/globals.css";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const elements = document.querySelectorAll(".slide-left, .slide-right");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return <Component {...pageProps} />;
}
