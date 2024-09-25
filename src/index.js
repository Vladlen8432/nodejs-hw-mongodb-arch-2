const setupServer = require('./server');
const initMongoConnection = require('./db/initMongoConnection');

const startServer = async () => {
  await initMongoConnection();
  const app = setupServer();
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer().catch((error) => {
  console.error('Error starting the server:', error);
});