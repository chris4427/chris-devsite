import { BlogSection } from "@/components/blog/BlogSection";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <BlogSection allBlogs />
    </DefaultLayout>
  );
}
