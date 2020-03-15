import { useState } from 'react';
import constate from 'constate';

import { ICache } from './index.d';
import { ISwapiCache } from '~typings/swapi';

import { UseCacheContext } from './index.d';

const defaultCache: ICache = {
  swapi: {
    people: [],
    planets: []
  }
};

const useCache: UseCacheContext = () => {
  const [cacheContext, setCacheContext] = useState<ICache>(defaultCache);

  const updateCache = (
    resourceKey: keyof ICache,
    dataKey: keyof ISwapiCache,
    value: any[]
  ) => {
    setCacheContext(state => {
      const stateCopy = { ...state };
      stateCopy[resourceKey][dataKey] = value;
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
