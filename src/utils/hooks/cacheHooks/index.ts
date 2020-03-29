import { useState } from 'react';
import constate from 'constate';

import { ICache, UpdateCache, UseCacheContext } from './index.d';
import { ISwapiCache } from '~typings/swapi';
import { IRickMortyCache, IPokemonCache } from '~typings/cache';
import { IPokemon } from '~typings/pokemon';

const defaultState = { pageRange: [], currentPage: 0, data: [] };

const defaultCache: ICache = {
  swapi: {
    people: defaultState,
    planets: defaultState,
    films: defaultState,
    species: defaultState,
    vehicles: defaultState,
    starships: defaultState
  },
  rickMorty: {
    characters: defaultState,
    episodes: defaultState,
    locations: defaultState
  },
  pokemon: {
    data: []
  }
};

const useCache: UseCacheContext = () => {
  const [cacheContext, setCacheContext] = useState<ICache>(defaultCache);

  const updateCache: UpdateCache = (dataCache, pageInfo = [[0], 0]) => {
    const [resourceKey, dataKey, data] = dataCache;
    const [pageRange, currentPage] = pageInfo;
    setCacheContext(state => {
      const stateCopy = { ...state };
      // stateCopy[resourceKey][dataKey] = { pageRange, currentPage, data };
      switch (resourceKey) {
        case 'swapi':
          stateCopy[resourceKey][dataKey as keyof ISwapiCache] = {
            pageRange,
            currentPage,
            data
          };
          break;
        case 'rickMorty':
          stateCopy[resourceKey][dataKey as keyof IRickMortyCache] = {
            pageRange,
            currentPage,
            data
          };
          break;

        case 'pokemon':
          stateCopy[resourceKey][dataKey as keyof IPokemonCache] = data;
          break;
        default:
          break;
      }

      return stateCopy;
    });
  };

  return { cache: cacheContext, updateCache };
};

const [CacheProvider, useCacheContext, useUpdateCache] = constate(
  useCache,
  value => value.cache,
  value => value.updateCache
);

export { CacheProvider, useCacheContext, useUpdateCache };
