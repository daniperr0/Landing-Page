import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introducction";
import TransitionPage from "@/components/transition-Page";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <Introduction/>
      </div>
    </main>
  );
}
