
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/AOS.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the official AOS CSS

// Initialize AOS animation library with specific configuration
document.addEventListener('DOMContentLoaded', () => {
  console.log("Initializing AOS");
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
    startEvent: 'DOMContentLoaded',
    disable: false
  });
});

// Mount the app
createRoot(document.getElementById("root")!).render(<App />);
