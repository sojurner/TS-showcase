import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { useCacheContext, useUpdateCache } from '~utils/hooks/cacheHooks';
import { usePagination } from '~utils/hooks/paginationHooks';

import * as API from '~utils/api/swapi';
import * as THooks from './index.d';

import { getPageRange } from '~utils/helpers';
import { TResource } from '~typings/swapi';
import { ILocationState } from '~components/Navigation/index.d';

const usePlanetsRequest: THooks.TUsePlanetsRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { data, pageRange, currentPage } = useCacheContext().swapi.planets;
  const { setPageRange, ...paginationProps } = usePagination(
    pageRange,
    currentPage
  );
  const updateCache = useUpdateCache();
  const planetsCache = [...data];

  useEffect(() => {
    if (!planetsCache[paginationProps.currentPage]) {
      (async () => {
        setLoading(state => !state);

        const planetsResult = await API.getPlanets(
          paginationProps.currentPage + 1
        );
        if ('results' in planetsResult) {
          const pages = getPageRange(planetsResult.count, 10);
          setPageRange(pages);
          planetsCache[paginationProps.currentPage] = planetsResult.results;
          updateCache(
            ['swapi', 'planets', planetsCache],
            [pages, paginationProps.currentPage]
          );
        } else {
          setError(planetsResult.message);
        }

        setLoading(state => !state);
      })();
    }
  }, [paginationProps.currentPage]);

  return [
    planetsCache[paginationProps.currentPage],
    paginationProps,
    loading,
    error
  ];
};

const usePeopleRequest: THooks.TUsePeopleRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const { data, pageRange, currentPage } = useCacheContext().swapi.people;
  const { setPageRange, ...paginationProps } = usePagination(
    pageRange,
    currentPage
  );
  const updateCache = useUpdateCache();
  const peopleCache = [...data];
  useEffect(() => {
    if (!peopleCache[paginationProps.currentPage]) {
      (async () => {
        setLoading(state => !state);

        const peopleResult = await API.getPeople(
          paginationProps.currentPage + 1
        );
        if ('results' in peopleResult) {
          peopleCache[paginationProps.currentPage] = peopleResult.results;
          const pages = getPageRange(peopleResult.count, 10);
          setPageRange(pages);
          updateCache(
            ['swapi', 'people', peopleCache],
            [pages, paginationProps.currentPage]
          );
        } else {
          setError(peopleResult.message);
        }

        setLoading(state => !state);
      })();
    }
  }, [paginationProps.currentPage]);

  return [
    peopleCache[paginationProps.currentPage],
    paginationProps,
    loading,
    error
  ];
};

const useFilmsRequest: THooks.TUseFilmsRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { data, pageRange, currentPage } = useCacheContext().swapi.films;
  const { setPageRange, ...paginationProps } = usePagination(
    pageRange,
    currentPage
  );
  const updateCache = useUpdateCache();
  const filmsCache = [...data];

  useEffect(() => {
    if (!filmsCache[paginationProps.currentPage]) {
      (async () => {
        setLoading(state => !state);

        const filmsResults = await API.getFilms(
          paginationProps.currentPage + 1
        );
        if ('results' in filmsResults) {
          filmsCache[paginationProps.currentPage] = filmsResults.results;
          const pages = getPageRange(filmsResults.count, 10);
          setPageRange(pages);
          updateCache(
            ['swapi', 'films', filmsCache],
            [pages, paginationProps.currentPage]
          );
        } else {
          setError(filmsResults.message);
        }
        setLoading(state => !state);
      })();
    }
  }, [paginationProps.currentPage]);

  return [
    filmsCache[paginationProps.currentPage],
    paginationProps,
    loading,
    error
  ];
};

const useSpeciesRequest: THooks.TUseSpeciesRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { data, currentPage, pageRange } = useCacheContext().swapi.species;
  const { setPageRange, ...paginationProps } = usePagination(
    pageRange,
    currentPage
  );
  const updateCache = useUpdateCache();
  const speciesCache = [...data];

  useEffect(() => {
    if (!speciesCache[paginationProps.currentPage]) {
      (async () => {
        setLoading(state => !state);

        const speciesResults = await API.getSpecies(
          paginationProps.currentPage + 1
        );
        if ('results' in speciesResults) {
          const pages = getPageRange(speciesResults.count, 10);
          setPageRange(pages);
          speciesCache[paginationProps.currentPage] = speciesResults.results;
          updateCache(
            ['swapi', 'species', speciesCache],
            [pages, paginationProps.currentPage]
          );
        } else {
          setError(speciesResults.message);
        }
        setLoading(state => !state);
      })();
    }
  }, [paginationProps.currentPage]);

  return [
    speciesCache[paginationProps.currentPage],
    paginationProps,
    loading,
    error
  ];
};

const useVehiclesRequest: THooks.TUseVehiclesRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { data, currentPage, pageRange } = useCacheContext().swapi.vehicles;
  const { setPageRange, ...paginationProps } = usePagination(
    pageRange,
    currentPage
  );
  const updateCache = useUpdateCache();
  const vehiclesCache = [...data];

  useEffect(() => {
    if (!vehiclesCache[paginationProps.currentPage]) {
      (async () => {
        setLoading(state => !state);

        const vehiclesResults = await API.getVehicles(
          paginationProps.currentPage + 1
        );

        if ('results' in vehiclesResults) {
          const pages = getPageRange(vehiclesResults.count, 10);
          setPageRange(pages);
          vehiclesCache[paginationProps.currentPage] = vehiclesResults.results;
          updateCache(
            ['swapi', 'vehicles', vehiclesCache],
            [pages, paginationProps.currentPage]
          );
        } else {
          setError(vehiclesResults.message);
        }
        setLoading(state => !state);
      })();
    }
  }, [paginationProps.currentPage]);

  return [
    vehiclesCache[paginationProps.currentPage],
    paginationProps,
    loading,
    error
  ];
};

const useStarshipsRequest: THooks.TUseStarshipsRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const { data, currentPage, pageRange } = useCacheContext().swapi.starships;
  const { setPageRange, ...paginationProps } = usePagination(
    pageRange,
    currentPage
  );
  const updateCache = useUpdateCache();
  const starshipsCache = [...data];

  useEffect(() => {
    if (!starshipsCache[paginationProps.currentPage]) {
      (async () => {
        setLoading(state => !state);

        const starshipsResults = await API.getStarships(
          paginationProps.currentPage + 1
        );
        if ('results' in starshipsResults) {
          const pages = getPageRange(starshipsResults.count, 10);
          setPageRange(pages);
          starshipsCache[paginationProps.currentPage] =
            starshipsResults.results;
          updateCache(
            ['swapi', 'starships', starshipsCache],
            [pages, paginationProps.currentPage]
          );
        } else {
          setError(starshipsResults.message);
        }

        setLoading(state => !state);
      })();
    }
  }, [paginationProps.currentPage]);

  return [
    starshipsCache[paginationProps.currentPage],
    paginationProps,
    loading,
    error
  ];
};

const useResourceGroupRequest: THooks.TUseResourceGroupRequest = () => {
  const { state, pathname } = useLocation<ILocationState>();
  const [swapi, resourceKey] = pathname.split('/').slice(1);
  const history = useHistory();
  const { resourceURLs, resourceInfo } = state;
  if (!resourceURLs) {
    history.push(`/${swapi}/${resourceKey}`);
  }

  const [resources, setResources] = useState<TResource[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (resourceURLs?.length) {
      (async () => {
        setLoading(state => !state);

        const resourceResponse = await API.getResourceGroup(resourceURLs);
        if (Array.isArray(resourceResponse)) {
          setResources(resourceResponse);
        } else {
          setError(resourceResponse.message);
        }

        setLoading(state => !state);
      })();
    }
  }, []);

  return [resources, resourceInfo, loading, error];
};

const useQuoteRequest: THooks.TUseQuoteRequest = () => {
  const [quote, setQuote] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(state => !state);
      const quoteResponse = await API.getQuote();
      if ('id' in quoteResponse) {
        setQuote(quoteResponse.starWarsQuote);
      } else {
        setError(quoteResponse.message);
      }
      setLoading(state => !state);
    })();
  }, []);

  return [quote, loading, error];
};

export {
  usePlanetsRequest,
  usePeopleRequest,
  useResourceGroupRequest,
  useFilmsRequest,
  useSpeciesRequest,
  useVehiclesRequest,
  useStarshipsRequest,
  useQuoteRequest
};
