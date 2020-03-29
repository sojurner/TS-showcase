import { fetchRequest } from '~utils/api';
import * as TApi from './index.d';
import { ICharacter, IResource, IEpisode, ILocation } from '~typings/rickMorty';

const rickMortyResources: IResource = {
  locations: 'https://rickandmortyapi.com/api/location',
  characters: 'https://rickandmortyapi.com/api/character',
  episodes: 'https://rickandmortyapi.com/api/episode'
};

const getCharacters = async (query: string) => {
  const { characters: charactersURL } = rickMortyResources;
  const charactersResponse:
    | TApi.IPageResourceResponse<TApi.IRawCharacter>
    | Error = await fetchRequest(`${charactersURL}?${query}`);

  if (
    TApi.TGPageResourceSuccess<TApi.IPageResourceResponse<TApi.IRawCharacter>>(
      charactersResponse
    )
  ) {
    const scrapedCharacters = charactersResponse.results.map(character => {
      const { created, url, location, origin, ...props } = character;
      return {
        ...props,
        location: location.name,
        origin: origin.name
      };
    });
    return { ...charactersResponse, results: scrapedCharacters };
  } else {
    return charactersResponse;
  }
};

const getLocations = async (query: string) => {
  const { locations: locationsURL } = rickMortyResources;
  const locationsResponse:
    | TApi.IPageResourceResponse<TApi.IRawLocation>
    | Error = await fetchRequest(`${locationsURL}?${query}`);

  if (
    TApi.TGPageResourceSuccess<TApi.IPageResourceResponse<TApi.IRawLocation>>(
      locationsResponse
    )
  ) {
    const scrapedLocations = locationsResponse.results.map(async location => {
      let returnResidents: ICharacter[] = [];
      const { url, created, residents, ...props } = location;
      const { characters: charactersURL } = rickMortyResources;
      if (residents.length) {
        const residentQuery = residents
          .map(resident => {
            const [id] = resident.split('/').slice(5);
            return id;
          })
          .join(',');

        const residentsResponse = await fetchRequest(
          `${charactersURL}/${residentQuery}`
        );
        if (TApi.TGCharacterResourceSuccess(residentsResponse)) {
          const residentsResource = residentsResponse.map(resident => {
            const { created, url, location, origin, ...props } = resident;
            return {
              ...props,
              location: location.name,
              origin: origin.name
            };
          }) as ICharacter[];
          returnResidents = residentsResource;
        } else {
          const {
            created,
            url,
            origin,
            location,
            ...props
          } = residentsResponse;
          props.location = location.name;
          props.origin = origin.name;
          returnResidents = [props];
        }
      }

      return {
        ...props,
        residents: returnResidents
      };
    });
    return {
      ...locationsResponse,
      results: await Promise.all(scrapedLocations)
    };
  } else {
    return locationsResponse;
  }
};

const getEpisodes = async (query: string) => {
  const { episodes: episodesURL } = rickMortyResources;
  const episodesResponse:
    | TApi.IPageResourceResponse<TApi.IRawEpisode>
    | Error = await fetchRequest(`${episodesURL}?${query}`);

  if (
    TApi.TGPageResourceSuccess<TApi.IPageResourceResponse<TApi.IRawEpisode>>(
      episodesResponse
    )
  ) {
    const scrapedEpisodes = episodesResponse.results.map(async episode => {
      let returnCharacters: ICharacter[] = [];
      const { url, created, characters, ...props } = episode;
      const { characters: charactersURL } = rickMortyResources;
      if (characters.length) {
        const characterQuery = characters
          .map(character => {
            const [id] = character.split('/').slice(5);
            return id;
          })
          .join(',');

        const charactersResponse = await fetchRequest(
          `${charactersURL}/${characterQuery}`
        );
        if (TApi.TGCharacterResourceSuccess(charactersResponse)) {
          const charactersResource = charactersResponse.map(character => {
            const { created, url, location, origin, ...props } = character;
            return {
              ...props,
              location: location.name,
              origin: origin.name
            };
          }) as ICharacter[];
          returnCharacters = charactersResource;
        } else {
          const {
            created,
            url,
            origin,
            location,
            ...props
          } = charactersResponse;
          props.location = location.name;
          props.origin = origin.name;
          returnCharacters = [props];
        }
      }
      return {
        ...props,
        characters: returnCharacters
      };
    });
    return {
      ...episodesResponse,
      results: await Promise.all(scrapedEpisodes)
    };
  } else {
    return episodesResponse;
  }
};

export { getCharacters, getLocations, getEpisodes };
