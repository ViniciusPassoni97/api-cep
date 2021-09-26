import api from '../service';
import { Request, Response } from 'express';

import Cache from '../../../../providers/node-cache';

import { ICep } from '@domain/cep/entities';

export default class ArticleController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { cep } = request.params;

    const cache = Cache.getNodeCache(cep);

    if(!cache) {
      const dataCep = await api.get<ICep>(`${cep}/json`);

      Cache.setNodeCache(dataCep.data);

      return response.send(dataCep.data);
    } else {
      return response.json(cache);
    }
  }
}
