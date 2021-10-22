import express from 'express';
import cors from 'cors';

import routes from './main/routes';
import envConfig from './main/config/enviroment';

const app = express();

app.use(cors())
  .use(express.json())
  .use(routes);

app.listen(
  envConfig.port,
  () => console.log(`Escuchando en el puerto ${envConfig.port}`),
);
