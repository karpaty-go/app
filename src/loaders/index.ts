import expressLoader from './express-loader';
import mongooseLoader from './mongoose-loader';

export default async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
  await mongooseLoader();

  // ... more loaders can be here

  // ... Initialize agenda
  // ... or Redis, or whatever you want
}