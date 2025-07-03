import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import ProjectsPage from "@/pages/projects";
import { BlogPostComponent } from "./pages/BlogPost";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<ProjectsPage />} path="/projects" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<BlogPostComponent />} path="/blog/:id" />
    </Routes>
  );
}

export default App;
