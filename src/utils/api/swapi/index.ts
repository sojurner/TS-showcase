import { fetchRequest } from '~utils/api';
import * as TApi from './index.d';

const swapiResources: TApi.ISwapiResources = {
  films: 'https://swapi.co/api/films',
  people: 'https://swapi.co/api/people',
  planets: 'https://swapi.co/api/planets',
  species: 'https://swapi.co/api/species',
  starships: 'https://swapi.co/api/starships',
  vehicles: 'https://swapi.co/api/vehicles'
};

const scrapePlanets: TApi.ScrapePlanets = rawPlanet => {
  const { created, edited, url, ...planetProps } = rawPlanet;
  return planetProps;
};

const getPlanets: TApi.TRequestResource<TApi.IResourceResponse<
  TApi.IParsedPlanet
>> = async (page = 1) => {
  const { planets } = swapiResources;
  const planetsResponse: unknown = await fetchRequest(
    `${planets}?page=${page}`
  );
  const rawPlanets = planetsResponse as TApi.IResourceResponse<TApi.IRawPlanet>;

  const parsedPlanets: TApi.IParsedPlanet[] = rawPlanets.results.map(
    scrapePlanets
  );

  return { ...rawPlanets, results: parsedPlanets };
};

const scrapePeople: TApi.ScrapePeople = rawPeople => {
  const { created, edited, url, ...peopleProps } = rawPeople;
  return peopleProps;
};

const getPeople: TApi.TRequestResource<TApi.IResourceResponse<
  TApi.IParsedPeople
>> = async (page = 1) => {
  const { people } = swapiResources;
  const planetsResponse: unknown = await fetchRequest(`${people}?page=${page}`);
  const rawPeople = planetsResponse as TApi.IResourceResponse<TApi.IRawPlanet>;

  const parsedPeople: TApi.IParsedPeople[] = rawPeople.results.map(
    scrapePeople
  );

  return { ...rawPeople, results: parsedPeople };
};

const getFilms = () => {};

const getVehicles = () => {};

const getSpecies = () => {};

export { getPlanets, getPeople };
