import DefaultLayout from "@/layouts/default";
import { BlogSection } from "@/components/blog/BlogSection";
import { ProjectSection } from "@/components/projects/ProjectSection";
import HeroSection from "@/components/hero/HeroSection";
import { Divider } from "@heroui/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <BlogSection amount={3} />
      <Divider className="mt-0" />
      <ProjectSection />
    </DefaultLayout>
  );
}
