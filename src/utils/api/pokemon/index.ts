import { fetchRequest } from '~utils/api';
import * as TApi from './index.d';
import * as TPoke from '~typings/pokemon';

const pokemonResources: TPoke.IPokemonResource<string> = {
  pokemon: 'https://pokeapi.co/api/v2/pokemon',
  pokemonSpecies: 'https://pokeapi.co/api/v2/pokemon-species'
};

const getPokemon: TApi.TGetPokemon = async (pageIndex: number = 0) => {
  const { pokemon: pokemonURL } = pokemonResources;

  const itemsRequest = Array.from(Array(20).keys()).map(
    index => pageIndex + 1 + index
  );

  const pokemons = itemsRequest.map(async pokemonId => {
    const pokeResp: TApi.IRawPokemon | Error = await fetchRequest(
      `${pokemonURL}/${pokemonId}`
    );

    if ('id' in pokeResp) {
      const {
        base_experience,
        game_indices,
        held_items,
        is_default,
        moves,
        location_area_encounters,
        sprites,
        order,
        forms,
        ...props
      } = pokeResp;
      const imgURL = `https://pokeres.bastionbot.org/images/pokemon/${pokeResp.id}.png`;
      return { ...props, img: imgURL };
    } else {
      return pokeResp as Error;
    }
  });

  return (await Promise.all(pokemons)) as TPoke.IPokemon[] | Error[];
};

const getPokemonEvolution: TPoke.TGetPokemonEvo = async (id: number) => {
  const { pokemonSpecies: pokemonURL } = pokemonResources;

  const pokeSpeciesRes: TPoke.IPokemonSpecies | Error = await fetchRequest(
    `${pokemonURL}/${id}`
  );

  if ('id' in pokeSpeciesRes) {
    const pokeEvolutionRes:
      | TPoke.IPokemonEvolution
      | Error = await fetchRequest(pokeSpeciesRes.evolution_chain.url);

    if ('id' in pokeEvolutionRes) {
      const evolutionChain = [
        pokeEvolutionRes.chain.species,
        ...pokeEvolutionRes.chain.evolves_to.reduce(flatten, [])
      ];
      return {
        evolutions: evolutionChain,
        color: pokeSpeciesRes.color
      };
    } else {
      return pokeEvolutionRes as Error;
    }
  } else {
    return pokeSpeciesRes as Error;
  }
};

const flatten = (
  flat: TPoke.IBasePokemonInfo[],
  chain: TPoke.IPokemonEvolutionDetails
) => {
  flat = [...flat, chain.species];
  chain.evolves_to?.forEach(evolution => {
    flat = [...flat, evolution.species];
  });

  if (chain.evolves_to?.length) flatten(flat, chain.evolution_details);

  return flat;
};

export { getPokemon, getPokemonEvolution };
