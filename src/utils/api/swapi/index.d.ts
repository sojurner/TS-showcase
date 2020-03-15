import { IPlanet, IPeople, IRawProperties } from '~typings/swapi';

// ---------------- Generics ---------------- //

export interface ISwapiResources {
  films: 'https://swapi.co/api/films' | string;
  people: 'https://swapi.co/api/people' | string;
  planets: 'https://swapi.co/api/planets' | string;
  species: 'https://swapi.co/api/species' | string;
  starships: 'https://swapi.co/api/starships' | string;
  vehicles: 'https://swapi.co/api/vehicles' | string;
}

export interface IResourceResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

interface IRawProperties {
  created: string;
  edited: string;
  url: string;
}

export type TRequestResource<T1> = (page?: number) => Promise<T1>;

export type ScrapeData<T1, T2> = (planet: T) => T2;

// ================== Generics ================== //

// ---------------- Planet ---------------- //

export interface IParsedPlanet extends IPlanet {}
export interface IRawPlanet extends IRawProperties, IPlanet {}

export type ScrapePlanets = ScrapeData<IRawPlanet, IParsedPlanet>;

// ================== Planet ================== //

// ---------------- People ---------------- //

export interface IParsedPeople extends IPeople {}
export interface IRawPeople extends IPeople, IRawProperties {}

export type ScrapePeople = ScrapeData<IRawPeople, IParsedPeople>;

// ================== People ================== //

export { IPlanet, IPeople, IRawProperties };
