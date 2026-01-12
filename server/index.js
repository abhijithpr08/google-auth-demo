import express from "express";
import cors from "cors";
import passport from "passport";

import "./config/passport.js";
import authRoutes from "./routes/auth.js";


const app = express();

app.use(cors());
app.use(passport.initialize());

app.get("/test", (req, res) => {
  res.send("Backend reachable");
});


app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
