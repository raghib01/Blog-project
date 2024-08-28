export const test = async (req, res) => {
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

  const newUser = new User({
    username,
    email,
    password,
  });

  await newUser.save();
  res.json({ message: "User registered successfully" });
};
