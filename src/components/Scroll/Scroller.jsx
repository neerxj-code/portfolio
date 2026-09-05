import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Scroller.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const progressRef = useRef(null);
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Sync progress bar with page scroll
  useEffect(() => {
    const progress = progressRef.current;

    if (!progress) return;

    const ctx = gsap.context(() => {
      gsap.to(progress, {
        scaleY: 1,
        transformOrigin: "top",
        ease: "none",

        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Convert mouse position to scroll position
  const handleScrollToFraction = (clientY) => {
    if (!trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();

    const relativeY = Math.max(
      0,
      Math.min(rect.height, clientY - rect.top)
    );

    const fraction = relativeY / rect.height;

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const targetScroll = fraction * maxScroll;

    window.scrollTo({
      top: targetScroll,
      behavior: isDragging ? "auto" : "smooth",
    });
  };

  // Start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleScrollToFraction(e.clientY);
  };

  // Handle dragging
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        handleScrollToFraction(e.clientY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="scroll-progress">
      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        className="scroll-track"
        title="Click or drag to scroll"
      >
        <div
          ref={progressRef}
          className="scroll-progress-bar"
        />
      </div>
    </div>
  );
}