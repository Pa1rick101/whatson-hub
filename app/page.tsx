import GridPattern from "@/components/magicui/animated-grid-pattern";
import HyperText from "@/components/magicui/hyper-text";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-gray-900">
      <GridPattern className="absolute inset-0 opacity-40 text-gray-300" />
      <div className="relative z-10">
        <HyperText text="Whatson Hub" className="text-4xl font-bold text-gray-900" />
      </div>
    </main>
  );
}
