'use client';

import React from 'react';
import HyperText from "@/components/magicui/hyper-text";
import ShineBorder from "@/components/magicui/shine-border";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <ShineBorder
        className="relative flex w-full max-w-2xl flex-col items-center justify-center overflow-hidden rounded-lg border bg-white shadow-xl p-8"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        borderRadius={8}
        borderWidth={1}
      >
        <HyperText 
          text="Onboarding" 
          className="text-4xl font-bold text-gray-900 mb-4"
        />
        <p className="text-lg text-gray-600 text-center">
          Welcome to the onboarding process. We're excited to have you here!
        </p>
      </ShineBorder>
    </main>
  );
}

  