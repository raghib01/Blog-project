import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const hashPass = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPass,
  });

  try {
    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({
      error: "Error registering user",
      details: error.message,
    });
  }
};
