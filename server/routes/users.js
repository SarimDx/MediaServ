import express from "express";
import {
  getUser,
  getUserFollowers,
  addRemoveFollower,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/followers", verifyToken, getUserFollowers);

/* UPDATE */
router.patch("/:id/:followerId", verifyToken, addRemoveFollower);

export default router;
