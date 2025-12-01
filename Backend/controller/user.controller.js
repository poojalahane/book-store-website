import User from "../model/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const eUser = await User.findOne({ email });
    if (eUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "User Created Successfully.",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error in registerUser:", error);
    res.status(500).json({ message: "Error in user controller" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }
    res.status(200).json({
      message: "User login successfully",
      user: { _id: user._id, fullname: user.fullname, email: user.email },
    });
  } catch (error) {
    console.log("Error in loginUser:", error);
    res.status(500).json({ message: "Error in user controller" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json({
      message: "All Users",
      count: allUsers.length,
      users: allUsers,
    });
  } catch (error) {
    console.log("Error in getAllUser:", error);
    res.status(500).json({ message: "Error in user controller" });
  }
};
