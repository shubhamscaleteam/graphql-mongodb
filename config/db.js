// connected database...!!

import mongoose from "mongoose";
const { MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connected successfullly..!!");
  })
  .catch((err) => {
    console.log(err);
  });
