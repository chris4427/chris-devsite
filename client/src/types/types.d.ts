export interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  blogCard?: BlogCard;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  languages: string;
  createdAt: Date;
  updatedAt: Date;
}
