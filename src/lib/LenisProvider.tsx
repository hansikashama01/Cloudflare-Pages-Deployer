import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t:number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      // no-op: lenis cleanup not required here
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
