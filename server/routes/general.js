import express from "express";

import { getUser, getUserByEmail } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/user/:email", getUserByEmail);

export default router;
