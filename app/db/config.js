const { config } = require("dotenv");
const mongoose = require("mongoose");
const connectDb = async () => {
try{
    const conn = await mongoose.connect(process.env.MONGODB_URI,
      { useUnifiedTopology: true});


    console.log(`Connected to MongoDB successfully ${conn.connection.host}`);
} catch(error) {
  console.log(error);
}
};module.exports = connectDb;