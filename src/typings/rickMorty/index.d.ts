export interface IResource {
  locations: 'https://rickandmortyapi.com/api/location' | string;
  characters: 'https://rickandmortyapi.com/api/character' | string;
  episodes: 'https://rickandmortyapi.com/api/episode' | string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  type: string;
  gender: string;
  species: string;
  origin: string;
  location: string;
  image: string;
  episode: string[];
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: ICharacter[];
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: ICharacter[];
}
