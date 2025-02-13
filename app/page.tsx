"use client";

import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <HeroCarousel />
    </div>
  );
}

