import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://saisandeepkoritala:SaiSandeep@cluster0.9tcswrz.mongodb.net/MERN?retryWrites=true&w=majority&appName=AtlasApp");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
