import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ImagesSliderProvider } from "@/components/image-slider-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";


export default function Home() {
  return (
    <TracingBeam>
      <main className="flex h-screen flex-col items-center justify-between">
        <ImagesSliderProvider>
          <p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The hero section slideshow <br /> nobody asked for
          </p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </ImagesSliderProvider>
      </main>
    </TracingBeam>
  );
}
