"use client";
import Preloader from '@/components/Preloader';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Expertise from '@/components/Expertise';
import Project from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <>
        <Hero />
        <Story />
        <Expertise />
        <Project />
        <Contact />
    </>
  );
}
