import { useEffect } from 'react';

const REVEAL = '.section__head, .about > *, .card, .stack > li, .steps li, .contact > *, .cta__inner > *, .hero__copy > *, .hero__visual';

/**
 * Scroll-driven motion: reveal-on-scroll with stagger, scroll progress,
 * hero parallax, header state and a pointer spotlight on cards.
 * Everything is a no-op without IntersectionObserver or with reduced motion.
 */
export function useCinematic() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty('--progress', String(max > 0 ? window.scrollY / max : 0));
        root.style.setProperty('--scroll', String(Math.min(window.scrollY, 900)));
        root.classList.toggle('is-scrolled', window.scrollY > 24);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const onPointer = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>('.card, .stack > li, .steps li');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    let io: IntersectionObserver | undefined;
    if (!reduce && 'IntersectionObserver' in window) {
      root.classList.add('js-motion');
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('is-in');
              io!.unobserve(en.target);
            }
          }),
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
      );
      document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => {
        const i = Array.prototype.indexOf.call(el.parentElement?.children ?? [], el);
        el.style.setProperty('--i', String(i % 8));
        el.setAttribute('data-reveal', '');
        io!.observe(el);
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
      cancelAnimationFrame(raf);
      io?.disconnect();
      root.classList.remove('js-motion', 'is-scrolled');
    };
  }, []);
}
