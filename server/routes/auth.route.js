import express from "express";
import passport from "passport";

const router = express.Router();

// 1️⃣ Start Google OAuth login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/",
  }),
  (req, res) => {
    // SET JWT IN COOKIE
    res.cookie("token", req.user.token, {
      httpOnly: true,
      secure: false,        // true in production (HTTPS)
      sameSite: "lax",
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    // REDIRECT DIRECTLY TO DASHBOARD
    res.redirect("http://localhost:5173/dashboard");
  }
);

// 3️ Logout (clear cookie)
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
  });
  res.json({ message: "Logged out" });
});


export default router;
