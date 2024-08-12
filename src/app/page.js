import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Projects";
import Story from "@/components/Story";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Expertise />
      <Project />
    </>
  );
}
