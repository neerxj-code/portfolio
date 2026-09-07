import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const panelsRef = useRef([]);
  const lettersRef = useRef([]);

  useEffect(() => {
    const panels = panelsRef.current;
    const letters = lettersRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    // --------------------------------
    // INITIAL STATE
    // --------------------------------

    gsap.set(preloaderRef.current, {
      autoAlpha: 1,
    //   backgroundColor: "#202020",
    });

    // Black panels covering the screen
    gsap.set(panels, {
      yPercent: 0,
      force3D: true,
    });

    // Name visible from beginning
    gsap.set(letters, {
    //   yPercent: 0,
    //   autoAlpha: 1,
    autoAlpha: 0,
    });

    // --------------------------------
    // HOLD NAME
    // --------------------------------

    tl.to({}, {
      duration: 1,
    })

        // --------------------------------
    // 2. NEERAJ APPEARS
    // --------------------------------

    tl.to(letters, {
      autoAlpha: 1,
      duration: 0.8,
      stagger: 0.08,
      ease: "power2.out",
    });

    // --------------------------------
    // LETTERS + PANELS DISAPPEAR TOGETHER
    // --------------------------------

   tl.to(
  letters,
  {
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: "power2.out",
  },
  3.5
)

    .to(
      panels,
      {
        yPercent: -100,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.inOut",
        force3D: true,
      },
      "<"
    )

    // --------------------------------
    // REMOVE PRELOADER
    // --------------------------------

    .set(preloaderRef.current, {
      autoAlpha: 0,
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const name = "NEERAJ";

  return (
    <div
      ref={preloaderRef}
      className="preloader"
    >
      {/* BLACK PANELS */}

      <div className="preloader-panels">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              panelsRef.current[index] = el;
            }}
            className="preloader-panel"
          />
        ))}
      </div>

      {/* NAME */}

      <div className="preloader-name">
        {name.split("").map((letter, index) => (
          <span
            key={index}
            ref={(el) => {
              lettersRef.current[index] = el;
            }}
            className="preloader-letter"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;