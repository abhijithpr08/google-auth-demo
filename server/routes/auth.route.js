import express from "express";
import passport from "passport";

const router = express.Router();

// Start Google OAuth login
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
      secure: false,        // localhost
      sameSite: "none",     // REQUIRED
      path: "/",
      maxAge: 60 * 60 * 1000,
    });


    // REDIRECT DIRECTLY TO DASHBOARD
    res.redirect("http://localhost:5173/dashboard");
  }
);

// 3️ Logout (clear cookie)
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    path: "/",
  });

  res.status(200).json({ message: "Logged out" });
});



export default router;
