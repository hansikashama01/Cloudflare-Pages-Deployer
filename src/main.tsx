import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ParticlesBackground from './components/ParticlesBackground';
import Loader from './components/Loader';
import LenisProvider from './lib/LenisProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LenisProvider>
      <div className="particles-canvas">
        <ParticlesBackground />
      </div>
      <Loader />
      <div className="ui-layer">
        <App />
      </div>
    </LenisProvider>
  </StrictMode>
);
