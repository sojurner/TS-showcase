import { fetchRequest } from '~utils/api';
import * as TApi from './index.d';
import { TResource } from '~typings/swapi';

const swapiResources: TApi.ISwapiResources = {
  films: 'https://swapi.co/api/films',
  people: 'https://swapi.co/api/people',
  planets: 'https://swapi.co/api/planets',
  species: 'https://swapi.co/api/species',
  starships: 'https://swapi.co/api/starships',
  vehicles: 'https://swapi.co/api/vehicles',
  quote: 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote'
};

type RawResource =
  | TApi.IRawPlanet
  | TApi.IRawPeople
  | TApi.IRawFilm
  | TApi.IRawSpecies
  | TApi.IRawVehicle
  | TApi.IRawStarship;

const scrapeData = (rawData: RawResource) => {
  const { created, edited, url, ...dataProps } = rawData;
  const id = parseInt(url[url.length - 2]);
  return { id, ...dataProps };
};

const getPlanets: TApi.TRequestPageResource<TApi.IPageResourceResponse<
  TApi.IPlanet
>> = async (page = 1) => {
  const { planets: planetsURL } = swapiResources;
  const planetsResponse: unknown = await fetchRequest(
    `${planetsURL}?page=${page}`
  );

  const rawPlanets = planetsResponse as TApi.IPageResourceResponse<
    TApi.IRawPlanet
  >;

  if (!TApi.TGPageSuccess(rawPlanets)) return rawPlanets as Error;

  const parsedPlanets = rawPlanets.results.map(scrapeData) as TApi.IPlanet[];

  return { ...rawPlanets, results: parsedPlanets };
};

const getPeople: TApi.TRequestPageResource<TApi.IPageResourceResponse<
  TApi.IPeople
>> = async (page = 1) => {
  const { people: peopleURL } = swapiResources;
  const peopleResponse: unknown = await fetchRequest(
    `${peopleURL}?page=${page}`
  );
  const rawPeople = peopleResponse as TApi.IPageResourceResponse<
    TApi.IRawPeople
  >;

  if (!TApi.TGPageSuccess(rawPeople)) return rawPeople as Error;

  const parsedPeople = rawPeople.results.map(scrapeData) as TApi.IPeople[];

  return { ...rawPeople, results: parsedPeople };
};

const getFilms: TApi.TRequestPageResource<TApi.IPageResourceResponse<
  TApi.IFilm
>> = async (page = 1) => {
  const { films: filmsURL } = swapiResources;
  const FilmsResponse: unknown = await fetchRequest(`${filmsURL}?page=${page}`);
  const rawFilms = FilmsResponse as TApi.IPageResourceResponse<TApi.IRawFilm>;

  const parsedFilms = rawFilms.results.map(scrapeData) as TApi.IFilm[];

  return { ...rawFilms, results: parsedFilms };
};

const getSpecies: TApi.TRequestPageResource<TApi.IPageResourceResponse<
  TApi.ISpecies
>> = async (page = 1) => {
  const { species: speciesURL } = swapiResources;
  const SpeciesResponse: unknown = await fetchRequest(
    `${speciesURL}?page=${page}`
  );
  const rawSpecies = SpeciesResponse as TApi.IPageResourceResponse<
    TApi.IRawSpecies
  >;

  if (!TApi.TGPageSuccess(rawSpecies)) return rawSpecies as Error;

  const parsedSpecies = rawSpecies.results.map(scrapeData) as TApi.ISpecies[];

  return { ...rawSpecies, results: parsedSpecies };
};

const getVehicles: TApi.TRequestPageResource<TApi.IPageResourceResponse<
  TApi.IVehicle
>> = async (page = 1) => {
  const { vehicles: vehiclesURL } = swapiResources;
  const vehiclesResponse: unknown = await fetchRequest(
    `${vehiclesURL}?page=${page}`
  );
  const rawVehicles = vehiclesResponse as TApi.IPageResourceResponse<
    TApi.IRawVehicle
  >;

  const parsedVehicles = rawVehicles.results.map(scrapeData) as TApi.IVehicle[];

  return { ...rawVehicles, results: parsedVehicles };
};

const getStarships: TApi.TRequestPageResource<TApi.IPageResourceResponse<
  TApi.IStarship
>> = async (page = 1) => {
  const { starships: starshipsURL } = swapiResources;
  const starshipsResponse: unknown = await fetchRequest(
    `${starshipsURL}?page=${page}`
  );
  const rawStarhips = starshipsResponse as TApi.IPageResourceResponse<
    TApi.IRawStarship
  >;

  if (!TApi.TGPageSuccess(rawStarhips)) return rawStarhips as Error;

  const parsedStarships = rawStarhips.results.map(
    scrapeData
  ) as TApi.IStarship[];

  return { ...rawStarhips, results: parsedStarships };
};

const getResourceGroup: TApi.TRequestResourceGroup = async (urls: string[]) => {
  const promises = urls.map(async url => await fetchRequest(url));
  const resources: (
    | TApi.IPageResourceResponse<TResource>
    | Error
  )[] = await Promise.all(promises);
  const rawResources: unknown[] = resources;

  if (resources.every(resource => TApi.TGResourceSuccess(resource))) {
    return (rawResources as RawResource[]).map(scrapeData) as TResource[];
  }
  return resources.find(resource => resource instanceof Error) as Error;
};

const getQuote: TApi.TRequestResource<TApi.IQuoteResourceResponse> = async () => {
  const { quote: quoteURL } = swapiResources;
  return await fetchRequest(quoteURL);
};

export {
  getPlanets,
  getPeople,
  getResourceGroup,
  getFilms,
  getSpecies,
  getVehicles,
  getStarships,
  getQuote
};
