import { BlogPost } from "@/types/types";

export async function getAllPosts(): Promise<BlogPost[]> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPostById(id: number): Promise<BlogPost> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}`);
  if (!res.ok) {
    if (res.status === 404) throw new Error("Post not found");
    throw new Error("Failed to fetch post");
  }
  return res.json();
}
