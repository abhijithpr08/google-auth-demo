import express from "express";
import passport from "passport";

const router = express.Router();

// STEP 4.1 Login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// STEP 4.2 Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/",
  }),
  (req, res) => {
    const token = req.user.token;

    res.redirect(
      `http://localhost:5174/login/success?token=${token}`
    );
  }
);

export default router;
