'use client'
import Image from "next/image";
import { useSession } from "next-auth/react";
import HeroSection from '../components/HeroSection';
import Navbar from '@/components/Navbar';


export default function Home() {


  return (

      <div>
        <Navbar/>
        <HeroSection />
      </div>

  );
}
