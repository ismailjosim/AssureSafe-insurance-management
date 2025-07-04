import mongoose from 'mongoose';
import config from './index';

const connectDB = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('AssureSafe Database Connected Successfully!');
  } catch (error) {
    console.error(`Failed to connect to database: ${error}`); // Keep your specific log message
    process.exit(1); // Exit process on connection failure
  }
};

export default connectDB;
