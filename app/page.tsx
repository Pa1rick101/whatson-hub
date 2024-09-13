"use client";

import GridPattern from "@/components/magicui/animated-grid-pattern";
import HyperText from "@/components/magicui/hyper-text";
import ShineBorder from "@/components/magicui/shine-border";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Users, BookOpen, FolderTree } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStartResearch = () => {
    router.push('/selection');
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white text-gray-900">
      <GridPattern className="absolute inset-0 opacity-40 text-gray-300" />
      <ShineBorder
        className="relative flex h-[500px] w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-lg border bg-white md:shadow-xl p-0"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        borderRadius={8}
        borderWidth={1}
      >
        <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
          <HyperText 
            text="Whatson Hub" 
            className="text-5xl font-bold text-gray-900"
          />
          <div className="max-w-md text-center">
            <p className="text-lg italic text-gray-600 mb-2">
              "The newest technical papers and the oldest books are the best sources of arbitrage."
            </p>
            <p className="text-sm text-gray-500">- Balaji Srinivasan</p>
          </div>
          <ShimmerButton
            className="mt-6"
            background="blue"
            onClick={handleStartResearch}
          >
            Start Research
          </ShimmerButton>
        </div>
      </ShineBorder>
      
      <div className="mt-8 w-full max-w-3xl grid grid-cols-3 gap-4">
        <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md border border-gray-300 relative z-10">
          <Users className="absolute top-2 right-2 w-5 h-5 text-gray-400" />
          <h3 className="text-sm font-semibold mb-2">Users</h3>
          <p className="text-3xl font-bold">450</p>
          <p className="text-green-600 text-sm">+20% last month</p>
        </div>
        <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md border border-gray-300 relative z-10">
          <BookOpen className="absolute top-2 right-2 w-5 h-5 text-gray-400" />
          <h3 className="text-sm font-semibold mb-2">Papers Read</h3>
          <p className="text-3xl font-bold">3,201</p>
          <p className="text-green-600 text-sm">+180% from last month</p>
        </div>
        <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md border border-gray-300 relative z-10">
          <FolderTree className="absolute top-2 right-2 w-5 h-5 text-gray-400" />
          <h3 className="text-sm font-semibold mb-2">Categories</h3>
          <p className="text-3xl font-bold">7</p>
          <p className="text-blue-600 text-sm">Expanding regularly</p>
        </div>
      </div>
    </main>
  );
}
