import express from "express";
import { login, deleteUser } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.delete("/deleteUser/:id", deleteUser);

export default router;
