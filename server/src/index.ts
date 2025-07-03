import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { setupSwagger } from "./docs/swagger";

//routes
import blogPostRoutes from "./routes/blogPosts";
import projectRoutes from "./routes/projects";

dotenv.config();

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/posts", blogPostRoutes);
app.use("/api/projects", projectRoutes);

// Swagger docs setup
setupSwagger(app);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/docs`);
});
