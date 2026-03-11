/* ============================================================
   useScrollAnimation.js
   Custom hook that adds 'visible' class to elements when
   they enter the viewport, triggering CSS fade-in animations.
   ============================================================ */
import { useEffect, useRef } from "react";

/**
 * useScrollAnimation
 * Attaches an IntersectionObserver to the returned ref.
 * Once the element is >15% visible it gets the 'visible' class.
 *
 * @param {number} threshold – visibility fraction to trigger (0–1)
 * @returns {React.RefObject}
 */
const useScrollAnimation = (threshold = 0.15) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          // Only animate once — unobserve after trigger
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
};

export default useScrollAnimation;
