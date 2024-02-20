import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/db.mjs";
import userRouter from "./routes/user.router.mjs";
import shopListingRouter from "./routes/shopListing.router.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB(); //initializing mongodb connection

app.get("/", (req, res) => {
  res.send("Hello world");
});

// middleware
app.use("/api/auth", userRouter);
app.use("/api/shop", shopListingRouter);

app.listen(PORT, () =>
  console.log(`server started listening at http://localhost:${PORT}`)
);
