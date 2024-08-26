"use client"
import React, { useEffect, Suspense, lazy } from 'react';
import Lenis from '@studio-freight/lenis';

const Navbar = lazy(() => import('@/components/Navbar'));
const Hero = lazy(() => import('@/components/Hero'));
const Story = lazy(() => import('@/components/Story'));
const Expertise = lazy(() => import('@/components/Expertise'));
const Project = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Hero />
      <Story />
      <Expertise />
      <Project />
      <Contact />
      <Footer />
    </Suspense>
  );
}
