
import AOS from 'aos';

declare global {
  interface Window {
    AOS: typeof AOS;
  }
}
