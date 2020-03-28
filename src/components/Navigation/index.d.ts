import { TResource } from '~typings/swapi';
import { NavLinkProps } from 'react-router-dom';

export interface ISwapiResourceNavigationProps {
  id?: number;
  resourceURLs: ISwapiResourceURLs;
  type: keyof SwapiResourceNavLink;
  resourceInfo: Partial<TResource>;
}

export interface ILocationState {
  resourceURLs: ISwapiResourceURLs[keyof ISwapiResourceURLs];
  resourceInfo: Partial<TResource>;
}

export interface SwapiResourceNavLink {
  planets: NavLinkProps[];
  species: NavLinkProps[];
  people: NavLinkProps[];
  films: NavLinkProps[];
  vehicles: NavLinkProps[];
  starships: NavLinkProps[];
}

export interface ISwapiResourceURLs {
  films?: string[];
  residents?: string[];
  people?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  planets?: string[];
  characters?: string[];
  pilots?: string[];
}

export interface INavDropDown<T> {
  swapi: T[];
  rickmorty: T[];
  pokemon: T[];
}
export interface IIconMappings<T> {
  people: T;
  planets: T;
  films: T;
  species: T;
  vehicles: T;
  starships: T;
  episodes: T;
  locations: T;
  swapi: T;
  rickmorty: T;
  pokemon: T;
}
