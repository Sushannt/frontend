import User from "../models/User.model.mjs";
import "dotenv/config";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({ message: "email already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password, user.password))) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);

      res.cookie("token", token, { httpOnly: true });
      return res.status(200).json({ user, token });
    }
    return res.status(401).json({ message: "Invalid Email or Password" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token", { httpOnly: true });
  return res.status(200).json({ message: "Logged out successfully!" });
};
