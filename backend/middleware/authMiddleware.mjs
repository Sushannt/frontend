import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../models/User.model.mjs";

export const isAuthenticatedUser = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "You are not logged in" });
  }

  try {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ message: "Something went wrong!" });
      }

      try {
        const user = await User.findById(decodedToken.userId);

        if (!user) {
          return res.status(404).json({ message: "No such user found" });
        }

        req.user = user; // Attach user object to request
        next(); // Move to next middleware or route handler
      } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
    });
  } catch (error) {
    return res.status(403).json({ message: "Authorization failed" });
  }
};
