"use client";

import { useEffect, useRef } from "react";

const SPEED = 40; // px al secondo
const RESUME_DELAY = 2000; // ms di pausa dopo l'interazione

export default function AutoScrollTrack({ className = "", children }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;
    let last = 0;
    let position = track.scrollLeft;
    let direction = 1;
    let visible = false;
    let hovering = false;
    let dragging = false;
    let touching = false;
    let resumeAt = 0;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const pauseFor = () => {
      resumeAt = performance.now() + RESUME_DELAY;
    };

    const tick = (now) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;

      const active =
        visible &&
        !hovering &&
        !dragging &&
        !touching &&
        now >= resumeAt &&
        !reduceMotion;

      if (active) {
        const max = track.scrollWidth - track.clientWidth;

        // se l'utente ha scrollato a mano, riparti da lì
        if (Math.abs(track.scrollLeft - position) > 2) {
          position = track.scrollLeft;
        }

        position += direction * SPEED * dt;

        if (position >= max) {
          position = max;
          direction = -1;
        } else if (position <= 0) {
          position = 0;
          direction = 1;
        }

        track.scrollLeft = position;
      } else {
        position = track.scrollLeft;
      }

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.1 },
    );
    observer.observe(track);

    const onPointerEnter = (e) => {
      if (e.pointerType === "mouse") hovering = true;
    };
    const onPointerLeave = (e) => {
      if (e.pointerType === "mouse") {
        hovering = false;
        pauseFor();
      }
    };
    const onPointerDown = (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      dragging = true;
      moved = false;
      startX = e.clientX;
      startScroll = track.scrollLeft;
      track.classList.add("is-dragging");
    };
    const onPointerMove = (e) => {
      if (!dragging) return;
      const delta = e.clientX - startX;
      if (Math.abs(delta) > 4) moved = true;
      track.scrollLeft = startScroll - delta;
    };
    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      track.classList.remove("is-dragging");
      pauseFor();
    };
    const onClickCapture = (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };
    const onTouchStart = () => {
      touching = true;
    };
    const onTouchEnd = () => {
      touching = false;
      pauseFor();
    };

    track.addEventListener("pointerenter", onPointerEnter);
    track.addEventListener("pointerleave", onPointerLeave);
    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    track.addEventListener("click", onClickCapture, true);
    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchend", onTouchEnd, { passive: true });
    track.addEventListener("touchcancel", onTouchEnd, { passive: true });

    frame = requestAnimationFrame((now) => {
      last = now;
      tick(now);
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      track.removeEventListener("pointerenter", onPointerEnter);
      track.removeEventListener("pointerleave", onPointerLeave);
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      track.removeEventListener("click", onClickCapture, true);
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchend", onTouchEnd);
      track.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  return (
    <div ref={trackRef} className={className}>
      {children}
    </div>
  );
}
