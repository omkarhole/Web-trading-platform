const User = require('../model/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const { createSecretToken } = require("../util/SecretToken");

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required', success: false });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email', success: false });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: 'Incorrect password or email', success: false });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,          // ✅ must be true
      sameSite: "None",        // ✅ for cross-site
      secure: true,            // ✅ required for Render HTTPS
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists", success: false });
    }

    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true, // ✅ fix here too
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }

    const user = await User.findById(data.id);
    if (user) {
      return res.json({ status: true, user: user.username });
    } else {
      return res.json({ status: false });
    }
  });
};
