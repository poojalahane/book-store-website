import React from "react";

import dotenv from "dotenv";
dotenv.config();
export const connectDB = () => {
  console.log(process.env.MONGO_URL);
};
