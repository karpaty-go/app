import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../routes'
const path = require("path")


export default async ({ app }: { app: express.Application }) => {
  app.get('/', (req,res) => {res.status(200).end()})/**send index html react file */
  // app.get('/status', (req, res) => { res.status(200).end(); });
  // app.head('/status', (req, res) => { res.status(200).end(); });
  // app.enable('trust proxy');
  app.use(cors());

  
  // app.use(require('morgan')('dev'));
  app.use(bodyParser.json());

  if (process.env.NODE_ENV === 'production'){
    // ... other app.use middleware 
    app.use(express.static(path.join(__dirname, "client", "build")))
  }
    
  routes(app)
  
  if (process.env.NODE_ENV === 'production'){
    // Right before your app.listen(), add this:
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../../client/build/index.html"));
    });
  }

  // ...More middlewares

  // Return the express app

  return app;
}