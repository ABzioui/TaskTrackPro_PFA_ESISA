import express from "express";
import { getProjects, getTasks } from "../controllers/control.js";

const router = express.Router();
router.get("/projects", getProjects);
router.get("/tasks", getTasks);

export default router;
