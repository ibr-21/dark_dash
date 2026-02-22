import mongoose from "mongoose";
const uri = "mongodb+srv://devuser:dashboard@mydev.c4udgdc.mongodb.net/dashboard?appName=mydev&retryWrites=true&w=majority";
const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO || uri);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};
