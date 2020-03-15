import { ISwapiCache } from '../../../typings/swapi/index.d';

export interface ICache {
  swapi: ISwapiCache;
}

export interface ICacheContext {
  cache: ICache;
  updateCache: UpdateCache;
}

export type UseCacheContext = () => ICacheContext;

export type UpdateCache = (
  resourceKey: keyof ICache,
  dataKey: keyof ISwapiCache,
  value: any[]
) => void;
