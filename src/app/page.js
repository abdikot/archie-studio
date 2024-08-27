"use client"
import React, { Suspense, lazy } from 'react';

const Navbar = lazy(() => import('@/components/Navbar'));
const Hero = lazy(() => import('@/components/Hero'));
const Story = lazy(() => import('@/components/Story'));
const Expertise = lazy(() => import('@/components/Expertise'));
const Project = lazy(() => import('@/components/Projects'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

export default function Home() {
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
