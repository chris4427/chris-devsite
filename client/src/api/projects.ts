import { Project } from "@/types/types";

export async function getAllProjects(): Promise<Project[]> {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getProjectById(id: number): Promise<Project> {
  const res = await fetch(`/api/projects/${id}`);
  if (!res.ok) {
    if (res.status === 404) throw new Error("Post not found");
    throw new Error("Failed to fetch post");
  }
  return res.json();
}
