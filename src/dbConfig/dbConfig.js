import mongoose from "mongoose";
let isConnected = falses;
export async function connect() {
  if (isConnected) {
    console.log("Database Already Connected !!!");
    return;
  }
  try {
    mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
      isConnected = true;
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
