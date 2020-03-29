import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useCacheContext, useUpdateCache } from '~utils/hooks/cacheHooks';
import * as API from '~utils/api/rickMorty';

import { usePagination } from '~utils/hooks/paginationHooks';
import { getPageRange } from '~utils/helpers';
import { ICharacter, ILocation, IEpisode } from '~typings/rickMorty';

import * as typings from './index.d';

const useCharactersPageRequest: typings.TResourcePagination<ICharacter> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const {
    data,
    pageRange,
    currentPage
  } = useCacheContext().rickMorty.characters;
  const { setPageRange, ...paginationProps } = usePagination(
    pageRange,
    currentPage
  );
  const updateCache = useUpdateCache();
  const charactersCache = [...data];

  useEffect(() => {
    if (!charactersCache[paginationProps.currentPage]) {
      (async () => {
        setLoading(state => !state);

        const characterResults = await API.getCharacters(
          `page=${paginationProps.currentPage + 1}`
        );
        if ('results' in characterResults) {
          const pageRange = getPageRange(characterResults.info.count, 20);
          setPageRange(pageRange);
          charactersCache[paginationProps.currentPage] =
            characterResults.results;
          updateCache(
            ['rickMorty', 'characters', charactersCache],
            [pageRange, paginationProps.currentPage]
          );
        } else {
          setError(characterResults.message);
        }

        setLoading(state => !state);
      })();
    }
  }, [paginationProps.currentPage]);

  return [
    charactersCache[paginationProps.currentPage],
    paginationProps,
    loading,
    error
  ];
};

const useLocationsPageRequest: typings.TResourcePagination<ILocation> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const {
    data,
    pageRange,
    currentPage
  } = useCacheContext().rickMorty.locations;
  const { setPageRange, ...paginationProps } = usePagination(
    pageRange,
    currentPage
  );
  const updateCache = useUpdateCache();
  const locationsCache = [...data];

  useEffect(() => {
    if (!locationsCache[paginationProps.currentPage]) {
      (async () => {
        setLoading(state => !state);

        const locationResults = await API.getLocations(
          `page=${paginationProps.currentPage + 1}`
        );
        if ('results' in locationResults) {
          const pageRange = getPageRange(locationResults.info.count, 20);
          setPageRange(pageRange);
          locationsCache[
            paginationProps.currentPage
          ] = locationResults.results.sort(
            (a, b) => b.residents.length - a.residents.length
          );
          updateCache(
            ['rickMorty', 'locations', locationsCache],
            [pageRange, paginationProps.currentPage]
          );
        } else {
          setError(locationResults.message);
        }

        setLoading(state => !state);
      })();
    }
  }, [paginationProps.currentPage]);

  return [
    locationsCache[paginationProps.currentPage],
    paginationProps,
    loading,
    error
  ];
};

const useEpisodesPageRequest: typings.TResourcePagination<IEpisode> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { data, pageRange, currentPage } = useCacheContext().rickMorty.episodes;
  const { setPageRange, ...paginationProps } = usePagination(
    pageRange,
    currentPage
  );
  const updateCache = useUpdateCache();
  const episodesCache = [...data];

  useEffect(() => {
    if (!episodesCache[paginationProps.currentPage]) {
      (async () => {
        setLoading(state => !state);

        const episodesResult = await API.getEpisodes(
          `page=${paginationProps.currentPage + 1}`
        );
        if ('results' in episodesResult) {
          const pageRange = getPageRange(episodesResult.info.count, 20);
          setPageRange(pageRange);
          episodesCache[paginationProps.currentPage] = episodesResult.results;
          updateCache(
            ['rickMorty', 'episodes', episodesCache],
            [pageRange, paginationProps.currentPage]
          );
        } else {
          setError(episodesResult.message);
        }

        setLoading(state => !state);
      })();
    }
  }, [paginationProps.currentPage]);

  return [
    episodesCache[paginationProps.currentPage],
    paginationProps,
    loading,
    error
  ];
};

const useCharacterSearch: typings.TUseSearch<ICharacter> = () => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [debounceValue] = useDebounce(searchVal, 700);

  useEffect(() => {
    if (debounceValue) {
      (async () => {
        setLoading(state => !state);
        const characterSearchResults = await API.getCharacters(
          `name=${debounceValue}`
        );
        if ('results' in characterSearchResults) {
          setSearchResults(characterSearchResults.results);
        } else {
          setError(characterSearchResults.message);
        }
        setLoading(state => !state);
      })();
    }
  }, [debounceValue]);

  const handleChange: typings.OnChangeEvent = ({ currentTarget }) => {
    if (error) setError('');
    setSearchVal(currentTarget.value);
  };

  return [
    { value: searchVal, onChange: handleChange },
    searchResults,
    loading,
    error
  ];
};

const useLocationSearch: typings.TUseSearch<ILocation> = () => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ILocation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [debounceValue] = useDebounce(searchVal, 700);

  useEffect(() => {
    if (debounceValue) {
      (async () => {
        setLoading(state => !state);
        const locationSearchResponse = await API.getLocations(
          `name=${debounceValue}`
        );
        if ('results' in locationSearchResponse) {
          setSearchResults(
            locationSearchResponse.results.sort(
              (a, b) => b.residents.length - a.residents.length
            )
          );
        } else {
          setError(locationSearchResponse.message);
        }
        setLoading(state => !state);
      })();
    }
  }, [debounceValue]);

  const handleChange: typings.OnChangeEvent = ({ currentTarget }) => {
    if (error) setError('');
    if (!currentTarget.value) setSearchResults([]);
    setSearchVal(currentTarget.value);
  };

  return [
    { value: searchVal, onChange: handleChange },
    searchResults,
    loading,
    error
  ];
};

const useEpisodeSearch: typings.TUseSearch<IEpisode> = () => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IEpisode[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [debounceValue] = useDebounce(searchVal, 700);

  useEffect(() => {
    if (debounceValue) {
      (async () => {
        setLoading(state => !state);
        const episodeSearchResult = await API.getEpisodes(
          `name=${debounceValue}`
        );
        if ('results' in episodeSearchResult) {
          setSearchResults(episodeSearchResult.results);
        } else {
          setError(episodeSearchResult.message);
        }
        setLoading(state => !state);
      })();
    }
  }, [debounceValue]);

  const handleChange: typings.OnChangeEvent = ({ currentTarget }) => {
    setSearchVal(currentTarget.value);
  };

  return [
    { value: searchVal, onChange: handleChange },
    searchResults,
    loading,
    error
  ];
};

export {
  useCharactersPageRequest,
  useLocationsPageRequest,
  useEpisodesPageRequest,
  useCharacterSearch,
  useLocationSearch,
  useEpisodeSearch
};
