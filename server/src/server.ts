import app from './app';
import config from './app/config';
import connectDB from './app/config/db';

async function main() {
  try {
    await connectDB();

    //   start the express application
    app.listen(config.port, () => {
      console.log(`AssureSafe Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(`Failed to connect to database or start server: ${error}`);
  }
}
main();
