'use client'
import Image from "next/image";
import { useSession } from "next-auth/react";
import HeroSection from '../components/HeroSection';

export default function Home() {


  return (
    <div>
      <HeroSection />
    </div>
  );
}
