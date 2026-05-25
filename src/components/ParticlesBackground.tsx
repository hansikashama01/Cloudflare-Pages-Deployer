import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine:any) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: ['#22c55e', '#d9f99d', '#ffffff'] },
      shape: { type: 'circle' },
      opacity: { value: 0.7, random: { enable: true, minimumValue: 0.2 } },
      size: { value: { min: 0.6, max: 2.2 } },
      move: { enable: true, speed: 0.2, direction: 'none', random: true, straight: false, outModes: { default: 'out' } },
      links: { enable: false }
    },
    detectRetina: true,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, onClick: { enable: false } },
      modes: { repulse: { distance: 120 } }
    }
  };

  return (
    <div className="particles-canvas">
      <Particles init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesBackground;
