import { Router } from 'express';
import cepRoutes from '../../../infra/http/cep/routes/cep.routes';


const routes = Router();

routes.use('/cep', cepRoutes);

export default routes;
