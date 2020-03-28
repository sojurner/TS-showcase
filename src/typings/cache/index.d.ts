import * as TSwapi from '~typings/swapi';
import * as TRickMorty from '~typings/rickMorty';
import * as TPokemon from '~typings/pokemon';

export interface ICacheData<T> {
  pageRange: number[];
  currentPage: number;
  data: T;
}

export interface ISwapiCache {
  planets: ICacheData<TSwapi.IPlanet[][]>;
  people: ICacheData<TSwapi.IPeople[][]>;
  films: ICacheData<TSwapi.IFilm[][]>;
  species: ICacheData<TSwapi.ISpecies[][]>;
  vehicles: ICacheData<TSwapi.IVehicle[][]>;
  starships: ICacheData<TSwapi.IStarship[][]>;
}

export interface IRickMortyCache {
  characters: ICacheData<TRickMorty.ICharacter[][]>;
  episodes: ICacheData<TRickMorty.IEpisode[][]>;
  locations: ICacheData<TRickMorty.ILocation[][]>;
}

export interface IPokemonCache {
  data: TPokemon.IPokemon[];
}
