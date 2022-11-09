import mongoose from "mongoose";

async function connection() {
  await mongoose.connect(
    "mongodb://localhost:27017/?readPreference=primary&ssl=false"
  );
}
console.log("MongoDB connection is successful");

export default connection;
