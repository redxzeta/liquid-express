import express from "express";
import { getLiquid } from "../controllers/liquidController.js";

const router = express.Router();

router.get("/", getLiquid);

export default router;
