import { useState, useEffect } from 'react';

import { getPlanets, getPeople } from '~utils/api/swapi';
import { getPageRange } from '~utils/helpers';

import * as TApi from '~utils/api/swapi/index.d';
import * as THooks from './index.d';

import { useCacheContext, useUpdateCache } from '~utils/hooks/cacheHooks';
import { usePagination } from '~utils/hooks/paginationHooks';

const usePlanetsRequest: THooks.TUsePlanetsRequest = () => {
  const { setPageRange, ...paginationProps } = usePagination();
  const { planets: planetsCache } = useCacheContext().swapi;
  const updateCache = useUpdateCache();

  useEffect(() => {
    if (!planetsCache[paginationProps.currentPage]) {
      (async () => {
        const planetsResult = await getPlanets(paginationProps.currentPage + 1);
        setPageRange(getPageRange(planetsResult.count));
        planetsCache[paginationProps.currentPage] = planetsResult.results;
        updateCache('swapi', 'planets', planetsCache);
      })();
    }
  }, [paginationProps.currentPage]);

  return [planetsCache[paginationProps.currentPage], paginationProps];
};

const usePeopleRequest: THooks.TUsePeopleRequest = () => {
  const { setPageRange, ...paginationProps } = usePagination();
  const { people: peopleCache } = useCacheContext().swapi;
  const updateCache = useUpdateCache();

  useEffect(() => {
    if (!peopleCache[paginationProps.currentPage]) {
      (async () => {
        const peopleResults = await getPeople(paginationProps.currentPage + 1);
        setPageRange(getPageRange(peopleResults.count));
        peopleCache[paginationProps.currentPage] = peopleResults.results;
        updateCache('swapi', 'people', peopleCache);
      })();
    }
  }, [paginationProps.currentPage]);

  return [peopleCache[paginationProps.currentPage], paginationProps];
};

export { usePlanetsRequest, usePeopleRequest };
