import About from "@/components/About";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="absolute bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
              <Hero />
              <About />
              <Skills />
              <RecentProject />
              <Footer />

      </div>
    </main>

  );
}
