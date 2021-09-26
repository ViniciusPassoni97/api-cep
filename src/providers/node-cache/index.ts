import NodeCache from 'node-cache';

import { ICep } from '../../domain/cep/entities/index';

class Cache {
    cache;

    constructor () {
        this.cache = new NodeCache();;
    }

    public setNodeCache(cep: ICep) {
        this.cache.set(cep.cep, cep, 1000);
    }

    public getNodeCache(cep: string) {
        return this.cache.get(cep);
    }

    public clearNodeCache() {
        this.cache.flushAll();
    }
};

export default new Cache();