import { siteConfig } from "@/config/site";
import { Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="text-center">
      <h1 className="text-5xl font-bold mb-4">Chris Ray</h1>
      <h2 className="text-xl mb-4">Software Engineer</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Computer Science graduate from Kansas State University with experience
        in web development, specializing in React, TypeScript, and Vue.js.
        Seeking challenging software engineering opportunities.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Button
          as={Link}
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          startContent={<Icon icon="lucide:github" />}
        >
          GitHub
        </Button>
        <Button
          as={Link}
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          startContent={<Icon icon="lucide:linkedin" />}
        >
          LinkedIn
        </Button>
        <Button
          as={Link}
          href="/about"
          color="secondary"
          startContent={<Icon icon="lucide:user" />}
        >
          About Me
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
