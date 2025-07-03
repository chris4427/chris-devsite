import React from "react";
import { Link } from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "@/api/blogPosts";
import { BlogCard as BlogCardComponent } from "./BlogCard";

type BlogSectionProps = {
  amount?: number;
  allBlogs?: boolean;
};

export const BlogSection: React.FC<BlogSectionProps> = ({
  amount,
  allBlogs,
}) => {
  const {
    data: blogPosts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: getAllPosts,
  });

  if (isLoading) return <div>Loading blog posts...</div>;
  if (isError || !blogPosts) return <div>Failed to load blog posts.</div>;

  const sortedPosts = blogPosts.sort((a, b) => b.date.localeCompare(a.date));
  const postsToShow = amount ? sortedPosts.slice(0, amount) : sortedPosts;

  return (
    <section id="blog" className="my-12">
      {allBlogs ? (
        <h2 className="text-3xl font-bold mb-6 text-center">All Blog Posts</h2>
      ) : (
        <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsToShow.map((item) => (
          <BlogCardComponent
            key={item.id}
            id={item.id}
            title={item.title}
            excerpt={item.excerpt}
            date={item.date}
          />
        ))}
      </div>
      {amount && (
        <div className="text-center mt-8">
          <Link as={RouterLink} to="/blog" color="primary">
            View All Posts
          </Link>
        </div>
      )}
    </section>
  );
};
