"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_1 = require("./docs/swagger");
//routes
const blogPosts_1 = __importDefault(require("./routes/blogPosts"));
const projects_1 = __importDefault(require("./routes/projects"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
if (process.env.NODE_ENV === "development") {
    app.use((0, cors_1.default)());
}
app.use((0, cors_1.default)({
    origin: ['https://chrisray.dev', 'https://chris-devsite-su8am.ondigitalocean.app'],
}));
app.use(express_1.default.json());
// API routes
app.use("/api/posts", blogPosts_1.default);
app.use("/api/projects", projects_1.default);
// Swagger docs setup
(0, swagger_1.setupSwagger)(app);
// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs at http://localhost:${PORT}/docs`);
});
