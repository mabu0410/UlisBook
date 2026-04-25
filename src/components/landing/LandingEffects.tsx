"use client";

import { useEffect } from "react";

const HEADER_OFFSET = 68;
const NAV_SCROLL_THRESHOLD = 60;

function throttle(callback: () => void, wait: number) {
  let lastRun = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return () => {
    const now = Date.now();
    const remaining = wait - (now - lastRun);

    if (remaining <= 0) {
      lastRun = now;
      callback();
      return;
    }

    if (timeoutId) {
      return;
    }

    timeoutId = setTimeout(() => {
      lastRun = Date.now();
      timeoutId = null;
      callback();
    }, remaining);
  };
}

function easeOutExpo(progress: number) {
  if (progress >= 1) {
    return 1;
  }
  return 1 - Math.pow(2, -10 * progress);
}

function parseCounterTarget(value: string) {
  const digits = value.match(/\d+/)?.[0] ?? "0";
  const target = Number(digits);
  const suffix = value.replace(digits, "");
  return { target, suffix };
}

export default function LandingEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    revealElements.forEach((element) => {
      const extraDelay = Number(element.dataset.revealDelay ?? 0);
      element.style.setProperty("--reveal-delay", `${extraDelay}ms`);

      if (element.dataset.reveal === "stagger") {
        Array.from(element.children).forEach((child, index) => {
          if (child instanceof HTMLElement) {
            child.style.setProperty("--stagger-index", `${index}`);
          }
        });
      }
    });

    let revealObserver: IntersectionObserver | null = null;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      revealElements.forEach((element) => element.classList.add("is-revealed"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -60px 0px",
        }
      );

      revealElements.forEach((element) => revealObserver?.observe(element));
    }

    const images = Array.from(
      document.querySelectorAll<HTMLImageElement>('img[data-lazy-fade="true"]')
    );
    const imageCleanups: Array<() => void> = [];

    images.forEach((image) => {
      const onReady = () => image.classList.add("loaded");
      if (image.complete) {
        onReady();
        return;
      }
      image.addEventListener("load", onReady, { once: true });
      imageCleanups.push(() => image.removeEventListener("load", onReady));
    });

    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const updateHeader = throttle(() => {
      if (!header) {
        return;
      }
      header.classList.toggle("scrolled", window.scrollY > NAV_SCROLL_THRESHOLD);
    }, 100);

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    const heroSection = document.querySelector<HTMLElement>("[data-hero]");
    const heroImage = document.querySelector<HTMLElement>(".hero-parallax-image");
    let parallaxRaf = 0;
    let willChangeReset: ReturnType<typeof setTimeout> | null = null;

    const updateParallax = () => {
      parallaxRaf = 0;

      if (prefersReducedMotion || !heroSection || !heroImage) {
        return;
      }

      const y = Math.max(0, Math.min(window.scrollY, heroSection.offsetHeight));
      heroImage.style.willChange = "transform";
      heroImage.style.transform = `translate3d(0, ${(y * 0.3).toFixed(2)}px, 0)`;

      if (willChangeReset) {
        clearTimeout(willChangeReset);
      }
      willChangeReset = setTimeout(() => {
        heroImage.style.willChange = "auto";
      }, 180);
    };

    const onParallaxScroll = () => {
      if (parallaxRaf) {
        return;
      }
      parallaxRaf = window.requestAnimationFrame(updateParallax);
    };

    if (!prefersReducedMotion && heroSection && heroImage) {
      window.addEventListener("scroll", onParallaxScroll, { passive: true });
      updateParallax();
    }

    const counterSection = document.querySelector<HTMLElement>("[data-stats]");
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-counter-target]")
    );
    let counterObserver: IntersectionObserver | null = null;
    let countersStarted = false;

    const startCounters = () => {
      if (countersStarted) {
        return;
      }
      countersStarted = true;

      if (prefersReducedMotion) {
        counters.forEach((counter) => {
          counter.textContent = counter.dataset.counterTarget ?? "0";
        });
        return;
      }

      counters.forEach((counter) => {
        const targetText = counter.dataset.counterTarget ?? "0";
        const { target, suffix } = parseCounterTarget(targetText);

        const duration = 2000;
        const start = performance.now();

        const step = (timestamp: number) => {
          const elapsed = timestamp - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutExpo(progress);
          const current = Math.round(target * eased);
          counter.textContent = `${current}${suffix}`;

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            counter.textContent = targetText;
          }
        };

        window.requestAnimationFrame(step);
      });
    };

    if (!counterSection || counters.length === 0) {
      countersStarted = true;
    } else if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      startCounters();
    } else {
      counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
            startCounters();
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.25,
          rootMargin: "0px 0px -60px 0px",
        }
      );

      counterObserver.observe(counterSection);
    }

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        return;
      }

      const destination = document.querySelector<HTMLElement>(href);
      if (!destination) {
        return;
      }

      event.preventDefault();

      const top = destination.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      window.history.pushState(null, "", href);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      revealObserver?.disconnect();
      counterObserver?.disconnect();
      imageCleanups.forEach((cleanup) => cleanup());
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("scroll", onParallaxScroll);

      if (parallaxRaf) {
        window.cancelAnimationFrame(parallaxRaf);
      }
      if (willChangeReset) {
        clearTimeout(willChangeReset);
      }
    };
  }, []);

  return null;
}
