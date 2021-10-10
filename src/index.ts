import express from 'express'
import init from './loaders'
import {PORT} from './config'

async function startServer() {
  
  const app = express();
  
  await init({ expressApp: app });
  
  app.listen(PORT,() => console.log(`Running on port ${PORT}`));
}

startServer();

