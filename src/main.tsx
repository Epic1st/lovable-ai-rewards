
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/AOS.css'
import AOS from 'aos';

// Initialize AOS animation library
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
    startEvent: 'DOMContentLoaded'
  });
});

createRoot(document.getElementById("root")!).render(<App />);
