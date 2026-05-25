import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProfilePic from '../assets/profile.svg';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const [glowPos, setGlowPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const onLeave = () => setGlowPos({ x: -1000, y: -1000 });
    const node = heroRef.current;
    node?.addEventListener('mousemove', onMove);
    node?.addEventListener('mouseleave', onLeave);
    return () => {
      node?.removeEventListener('mousemove', onMove);
      node?.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_18%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 pointer-events-none" />

      <div
        aria-hidden
        style={{ left: glowPos.x, top: glowPos.y }}
        className="pointer-events-none absolute w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen opacity-90 blur-3xl transition-all duration-200"
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '9999px',
            background: 'radial-gradient(circle at 30% 30%, rgba(34,197,94,0.22), rgba(34,197,94,0.12) 35%, rgba(255,255,255,0.06) 65%, transparent 82%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="grid gap-10 lg:grid-cols-[1.4fr_0.95fr] items-center"
        >
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-300 shadow-[0_0_30px_rgba(34,197,94,0.12)]">
              black · white · green
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                Hansika Shamal
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Clean DevOps systems in black, white and green—automation, cloud delivery, and secure pipelines with strong visual clarity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full bg-emerald-500/15 px-6 py-3 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/20 transition hover:bg-emerald-500/25"
              >
                View Work
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact
              </button>
            </div>

            <div className="grid max-w-md grid-cols-3 gap-3">
              {['Cloud', 'Infra', 'Auto'].map((item) => (
                <div
                  key={item}
                  className="glass rounded-3xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -left-10 top-12 h-36 w-36 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="glass-strong relative overflow-hidden rounded-[2rem] border border-white/10 p-5 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)] opacity-75" />
              <div className="relative space-y-5">
                <div className="flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-black/30 p-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/20 bg-white/5 shadow-2xl">
                    <img
                      src="/profile.png"
                      alt="Hansika Shamal"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = ProfilePic;
                      }}
                      className="h-20 w-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Lead DevOps</p>
                    <h2 className="text-2xl font-semibold text-white">Hansika</h2>
                    <p className="text-sm text-slate-300">Precise cloud delivery</p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { label: 'Cloud', value: 'AWS & GCP' },
                    { label: 'Tools', value: 'Terraform + Docker' },
                    { label: 'CI/CD', value: 'GitHub Actions' },
                    { label: 'Result', value: 'Reliable' },
                  ].map((item) => (
                    <div key={item.label} className="glass rounded-3xl border border-white/10 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                      <p className="mt-3 text-sm text-slate-200 font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <ChevronDown size={18} />
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
