import mongoose from 'mongoose';
import config from './index';
import 'colors';

const connectDB = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('AssureSafe Database Connected Successfully!'.bgCyan.bold);
  } catch (error) {
    console.error(`Failed to connect to database: ${error}`.bgRed); // Keep your specific log message
    process.exit(1); // Exit process on connection failure
  }
};

export default connectDB;
