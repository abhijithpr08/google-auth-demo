import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticateJWT = (req, res, next) => {
  // 1️ Read token from headers
   const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not Authendicated" });
  }

  // 2️ Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid or expired" });
    }

    // 3️ If valid, attach user to request
    req.user = user;
    next(); // allow request to continue
  });
};
