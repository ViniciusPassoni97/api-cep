import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import FeaturedCepController from '../../../../infra/http/cep/controller/CepController';

const webserieRouter = Router();

const featuredCepController = new FeaturedCepController();

webserieRouter.get(
    '/:cep',
    celebrate({
        [Segments.PARAMS]: {
           cep: Joi.string().required(),
        },
    }),  
    featuredCepController.index,
);

export default webserieRouter;
