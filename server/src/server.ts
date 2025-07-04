import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('AssureSafe Database Connected Successfully!');

    //   start the express application
    app.listen(config.port, () => {
      console.log(`AssureSafe Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(`Failed to connect to database or start server: ${error}`);
  }
}
main();
