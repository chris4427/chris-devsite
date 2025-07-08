"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all blog posts
 *     responses:
 *       200:
 *         description: A list of blog posts
 */
router.get("/", async (req, res) => {
    try {
        const posts = await prisma.blogPost.findMany({
            orderBy: { date: "desc" },
        });
        res.json(posts);
    }
    catch (error) {
        console.error("Failed to fetch posts:", error);
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});
/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get a single blog post by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single blog post
 *       404:
 *         description: Post not found
 */
router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({ error: "Invalid post ID" });
        return;
    }
    try {
        const post = await prisma.blogPost.findUnique({
            where: { id },
        });
        if (!post) {
            res.status(404).json({ error: "Post not found" });
            return;
        }
        res.json(post);
    }
    catch (error) {
        console.error(`Failed to fetch post with id ${id}:`, error);
        res.status(500).json({ error: "Failed to fetch post" });
    }
});
exports.default = router;
