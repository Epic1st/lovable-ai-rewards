
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/AOS.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the official AOS CSS

// Initialize AOS animation library with specific configuration
document.addEventListener('DOMContentLoaded', () => {
  console.log("Initializing AOS from main.tsx");
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
    startEvent: 'DOMContentLoaded',
    disable: false,
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
  });
});

// Mount the app
createRoot(document.getElementById("root")!).render(<App />);
