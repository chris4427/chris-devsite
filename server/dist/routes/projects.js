"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects
 *     responses:
 *       200:
 *         description: A list of projects
 */
router.get("/", async (req, res) => {
    try {
        const projects = await prisma.project.findMany({
            orderBy: { createdAt: "desc" },
        });
        res.json(projects);
    }
    catch (error) {
        console.error("Failed to fetch projects:", error);
        res.status(500).json({ error: "Failed to fetch projects" });
    }
});
/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Get a single project by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single project
 *       404:
 *         description: Project not found
 */
router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid Project ID" });
        return;
    }
    try {
        const project = await prisma.project.findUnique({
            where: { id },
        });
        if (!project) {
            res.status(404).json({ error: "Project not found" });
            return;
        }
        res.json(project);
    }
    catch (error) {
        console.error(`Failed to fetch project with id ${id}:`, error);
        res.status(500).json({ error: "Failed to fetch project" });
    }
});
exports.default = router;
