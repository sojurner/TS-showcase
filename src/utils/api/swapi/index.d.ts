import {
  IPlanet,
  IFilm,
  IPeople,
  ISpecies,
  IVehicle,
  IStarship,
  TResource
} from '~typings/swapi/index.d';

// ---------------- Generics ---------------- //

export interface ISwapiResources {
  films: 'https://swapi.co/api/films' | string;
  people: 'https://swapi.co/api/people' | string;
  planets: 'https://swapi.co/api/planets' | string;
  species: 'https://swapi.co/api/species' | string;
  starships: 'https://swapi.co/api/starships' | string;
  vehicles: 'https://swapi.co/api/vehicles' | string;
  quote:
    | 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote'
    | string;
}

export interface IPageResourceResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface IQuoteResourceResponse {
  id: number;
  starWarsQuote: string;
  faction: number;
}

export interface IRawProperties {
  created: string;
  edited: string;
  url: string;
}

export type TRequestResource<T> = () => Promise<T | Error>;
export type TRequestPageResource<T1> = (page?: number) => Promise<T1 | Error>;
export type TRequestResourceGroup = (
  urls: string[]
) => Promise<TResource[] | Error>;

export type ScrapeData<T1, T2> = (data: T1) => T2;

// ================== Generics ================== //

// ---------------- Raw ---------------- //

export interface IRawPlanet extends Omit<IPlanet, 'id'>, IRawProperties {}

export interface IRawPeople extends Omit<IPeople, 'id'>, IRawProperties {}

export interface IRawFilm extends Omit<IFilm, 'id'>, IRawProperties {}

export interface IRawSpecies extends Omit<ISpecies, 'id'>, IRawProperties {}

export interface IRawVehicle extends Omit<IVehicle, 'id'>, IRawProperties {}

export interface IRawStarship extends Omit<IStarship, 'id'>, IRawProperties {}

export function TGPageSuccess(
  response: IPageResourceResponse<any> | Error
): response is IPageResourceResponse<any> {
  return (response as IPageResourceResponse<any>).results !== undefined;
}

export function TGResourceSuccess(
  response: IPageResourceResponse<TResource> | Error
): response is Error {
  return (response as Error).message === undefined;
}

export function TGQuoteSuccess(
  response: IQuoteResourceResponse | Error
): response is IQuoteResourceResponse {
  return response.starwarsQuote !== undefined;
}

// export function TG

// ================== Raw ================== //

export { IPlanet, IPeople, IFilm, ISpecies, IVehicle, IStarship, TResource };
