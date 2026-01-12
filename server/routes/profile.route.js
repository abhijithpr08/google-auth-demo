import express from "express";
import { authenticateJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

// Protected route
router.get("/", authenticateJWT, (req, res) => {
  res.json({
    message: "This is your protected profile data",
    user: req.user, // data from JWT
  });
});

export default router;
