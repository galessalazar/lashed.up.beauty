require("dotenv").config();

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const router = express.Router();

// register a new user (tech)
router.post("/register", async (req, res) => {
  console.log("Incoming request body:", req.body);
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      role: "Lash Technician",
    });

    await newUser.save();
    console.log("User saved:", newUser);

    const payload = { userId: newUser._id, role: newUser.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ msg: "User registered successfully", token });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Incoming request body:", req.body);

  if (!email || !password) {
    return res.status(400).json({ message: "Missing email or password" });
  }

  // login route for tech

  try {
    // checks if  user exists
    const user = await User.findOne({ email });
    console.log("user found:", user);
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // compares the password entered with the hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // send back token
    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error", error: error.message, stack: error.stack });
  }
});

module.exports = router;
