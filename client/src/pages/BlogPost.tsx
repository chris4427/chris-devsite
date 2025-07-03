import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import { Link } from "@heroui/react";
import { getPostById } from "@/api/blogPosts"; // your fetch function
// import { getAllPosts } from "@/api/blogPosts"; // to fetch all posts for related posts
import DefaultLayout from "@/layouts/default";

export const BlogPostComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  // Fetch the single post
  const {
    data: blogPost,
    isLoading: postLoading,
    isError: postError,
  } = useQuery({
    queryKey: ["blog-post", postId],
    queryFn: ({ queryKey }) => getPostById(queryKey[1] as number), // 👈 use your prewritten function
    enabled: !isNaN(postId), // prevent if id is invalid
  });

  // Fetch all posts for related posts
  // const {
  //   data: blogPosts,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["blog-posts"],
  //   queryFn: getAllPosts, // 👈 use your prewritten function
  // });

  const formattedDate = new Date(blogPost?.date ?? "").toLocaleDateString(
    "en-US",
    {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }
  );

  const BlogPostSkeleton = () => (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="h-12 bg-gray-300 rounded w-3/4 animate-pulse" />
      <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded animate-pulse" />
        <div className="h-4 bg-gray-300 rounded animate-pulse w-5/6" />
        <div className="h-4 bg-gray-300 rounded animate-pulse w-4/6" />
      </div>
    </div>
  );

  return (
    <DefaultLayout>
      <article className="max-w-3xl mx-auto">
        {postLoading ? (
          <BlogPostSkeleton />
        ) : postError ? (
          <div>Error</div>
        ) : !blogPost ? (
          <div>Post not found</div>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
            <p className="text-default-500">{formattedDate}</p>
            <div
              className="prose prose-lg dark:prose-invert prose-img:inline-block prose-img:mt-2 prose-img:mb-1 prose-hr:my-3"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
            <div className="mt-12">
              {/* <h2 className="text-2xl font-semibold mb-4">Related Posts</h2>
              <ul className="space-y-2">
                {blogPosts
                  ?.filter((p) => p.id !== blogPost.id)
                  .map((relatedPost) => (
                    <li key={relatedPost.id}>
                      <Link
                        as={RouterLink}
                        to={`/blog/${relatedPost.id}`}
                        color="primary"
                      >
                        {relatedPost.title}
                      </Link>
                    </li>
                  ))}
              </ul> */}
            </div>
          </>
        )}
      </article>
    </DefaultLayout>
  );
};
