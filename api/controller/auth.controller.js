import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

// @route POST /api/auth/signup
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
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
    next(error);
  }
};

// @route POST /api/auth/signin
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    //get validation for user sign in
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "User not found"));
    }

    //get validation for user password
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Invalide Credential"));
    }

    //create JWT token for user cookie:
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
    //hiding hash password .
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("Access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {}
};
