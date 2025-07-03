import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
// import { setupSwagger } from "./docs/swagger";

//routes
import blogPostRoutes from "./routes/blogPosts";
import projectRoutes from "./routes/projects";

dotenv.config();

const app: Express = express();

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(cors());
}
app.use(express.json());

// API routes
app.use("/api/posts", blogPostRoutes);
app.use("/api/projects", projectRoutes);

// Serve React static files
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// Catch-all to serve React app for other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

// Swagger docs setup
// setupSwagger(app);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/docs`);
});
