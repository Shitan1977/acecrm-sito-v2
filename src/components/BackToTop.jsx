"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`ace-back-to-top ${visible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Torna all’inizio della pagina"
      title="Torna su"
    >
      <i className="icofont-simple-up" aria-hidden="true" />
    </button>
  );
}