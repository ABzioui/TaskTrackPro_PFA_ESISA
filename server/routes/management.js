import express from "express";
import { getUsers } from "../controllers/management.js";

const router = express.Router();

router.get("/admin", getUsers);

export default router;
