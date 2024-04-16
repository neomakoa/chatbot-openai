import { connect, disconnect } from "mongoose";

const connectToDatabase = async () => {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    throw new Error(" cannot connect to database");
  }
};

const disconnectDatabase = async () => {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("cannot disconnect from database");
  }
};

export { connectToDatabase, disconnectDatabase };
