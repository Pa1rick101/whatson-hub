import GridPattern from "@/components/magicui/animated-grid-pattern";
import HyperText from "@/components/magicui/hyper-text";
import ShineBorder from "@/components/magicui/shine-border";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-gray-900">
      <GridPattern className="absolute inset-0 opacity-40 text-gray-300" />
      <ShineBorder
        className="relative flex h-[500px] w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-lg border bg-white md:shadow-xl p-0"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        borderRadius={8}
        borderWidth={1}
      >
        <div className="w-full h-full flex items-center justify-center">
          <HyperText 
            text="Whatson Hub" 
            className="text-5xl font-bold text-gray-900"
          />
        </div>
      </ShineBorder>
    </main>
  );
}
