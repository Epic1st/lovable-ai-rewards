
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/AOS.css'
import AOS from 'aos';

// Initialize AOS animation library
AOS.init({
  duration: 800,
  once: false,
  mirror: true,
});

createRoot(document.getElementById("root")!).render(<App />);
