import express from 'express';
import 'dotenv/config';

import routes from './infra/http/shared/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);