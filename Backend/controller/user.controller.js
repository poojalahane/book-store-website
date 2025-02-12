import User from "../model/user.model.js";
import bcrypt from "bcrypt";
export const registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json("all fields are required");
    }
    const eUser = await User.findOne({ email });
    if (eUser) {
      console.log("email exists");
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // console.log(hashedPassword);

    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    //console.log(user);
    res.status(201).json({
      message: "User Created Successfully.",
      email,
      fullname,
      password,
    });
    // if (eUser) {
    //   console.log(eUser);
    //   //res.status(200).json("User already registered please login,,");
    // } else {
    //   const user = await User.create({ fullname, email, password });
    //   //console.log(user);
    //   res
    //     .status(201)
    //     .json({
    //       message: "User Created Successfully.",
    //       email,
    //       fullname,
    //       password,
    //     });
    // }
  } catch (error) {
    console.log(error);
    res.status(500).json("Erron in user controller");
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    } else {
      //  console.log(user);
      res.status(200).json({
        message: "User login successfully",
        user: { _id: user._id, fullname: user.fullname, email: user.email },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Erron in user controller");
  }
};
export const getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find({});
    console.log(allUsers);
    res
      .status(200)
      .json({ message: "all USers", count: allUsers.length, allUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json("Erron in user controller");
  }
};
