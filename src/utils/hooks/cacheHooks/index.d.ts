import {
  ISwapiCache,
  IRickMortyCache,
  IPokemonCache
} from '~typings/cache/index.d';

export interface ICache {
  swapi: ISwapiCache;
  rickMorty: IRickMortyCache;
  pokemon: IPokemonCache;
  [key: keyof ICache]: ISwapiCache | IRickMortyCache;
}

export interface ICacheContext {
  cache: ICache;
  updateCache: UpdateCache;
}

export type UseCacheContext = () => ICacheContext;

export type UpdateCache = (
  dataCache: [
    keyof ICache,
    keyof ISwapiCache | keyof IRickMortyCache | keyof IPokemonCache,
    any[]
  ],
  pageInfo?: [number[], number]
) => void;
