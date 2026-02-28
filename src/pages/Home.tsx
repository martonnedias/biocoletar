import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import Services from '../components/Services';
import Authority from '../components/Authority';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <ValueProposition />
      <Services />
      <Authority />
      <Testimonials />
      <FAQ />
      <InstagramFeed />
      <ContactForm />
    </main>
  );
}
