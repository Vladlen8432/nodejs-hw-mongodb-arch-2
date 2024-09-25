const mongoose = require('mongoose');

const initMongoConnection = async () => {
  try {
    const user = process.env.MONGODB_USER;
    const password = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URL;
    const db = process.env.MONGODB_DB;

    console.log("MONGODB_USER:", process.env.MONGODB_USER);
    console.log("MONGODB_PASSWORD:", process.env.MONGODB_PASSWORD);
    console.log("MONGODB_URL:", process.env.MONGODB_URL);
    console.log("MONGODB_DB:", process.env.MONGODB_DB);

    const connectionString = `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(connectionString);

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = initMongoConnection;
