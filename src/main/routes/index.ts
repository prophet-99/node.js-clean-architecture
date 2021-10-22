import express from 'express';

import envConfig from '../config/enviroment';
import productRoutes from './product';

const app = express();
app.use(`${envConfig.baseApi}/product`, productRoutes);

export default app;
