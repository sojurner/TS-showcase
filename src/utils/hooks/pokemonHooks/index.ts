import { useEffect, useState } from 'react';
import * as API from '~utils/api/pokemon';

import { useInfiniteScroll } from '~utils/hooks/scrollHooks';
import { useCacheContext, useUpdateCache } from '~utils/hooks/cacheHooks';

import * as typings from './index.d';
import { IPokemon, IBasePokemonInfo } from '~typings/pokemon';

const usePokemonPageRequest: typings.TUsePokemonPageRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const updateCache = useUpdateCache();
  const { data } = useCacheContext().pokemon;
  const pokemonCache = [...data];
  const [loadIndex, handleScroll] = useInfiniteScroll(
    pokemonCache.length,
    20,
    964
  );

  useEffect(() => {
    if (pokemonCache.length < loadIndex + 20)
      (async () => {
        setLoading(state => !state);

        const pokemonResults = await API.getPokemon(loadIndex);

        if (!pokemonResults.some((res: IPokemon | Error) => 'message' in res)) {
          const pokemon = pokemonResults as IPokemon[];

          updateCache(['pokemon', 'data', [...pokemonCache, ...pokemon]]);
        } else {
          setError('something went wrong');
        }
        setLoading(state => !state);
      })();
  }, [loadIndex]);

  return [pokemonCache, handleScroll, loading, error];
};

const usePokemonEvolutionRequest: typings.TUsePokemonEvolutionRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const updateCache = useUpdateCache();
  const { data } = useCacheContext().pokemon;
  const pokemonCache = [...data];

  useEffect(() => {
    const pokemon = pokemonCache[selectedIndex];
    if (pokemon) {
      if (!pokemon.evolutions) {
        (async () => {
          setLoading(state => !state);
          const evolutionResults = await API.getPokemonEvolution(pokemon.id);

          if ('message' in evolutionResults) {
            setError('something went wrong');
          } else {
            pokemonCache[selectedIndex].evolutions =
              evolutionResults.evolutions;
            pokemonCache[selectedIndex].color = evolutionResults.color;

            updateCache(['pokemon', 'data', pokemonCache]);
          }
          setLoading(state => !state);
        })();
      }
    }
  }, [pokemonCache.length, selectedIndex]);

  const handlePokemonSelect: typings.TSelectPokemon = (pokemonId: number) => {
    const index = pokemonCache.findIndex(poke => poke.id === pokemonId);
    setSelectedIndex(index);
  };

  return [pokemonCache[selectedIndex], handlePokemonSelect, loading, error];
};

export { usePokemonPageRequest, usePokemonEvolutionRequest };
