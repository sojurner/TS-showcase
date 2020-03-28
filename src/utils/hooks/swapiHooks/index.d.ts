import {
  IPlanet,
  IPeople,
  IFilm,
  ISpecies,
  IVehicle,
  IStarship,
  TResource
} from '~typings/swapi/index.d';
import { IPaginationProps } from '~utils/hooks/paginationHooks/index.d';

export type TUseQuoteRequest = () => [string, boolean, string];
export type TUsePlanetsRequest = TResourcePagination<IPlanet>;
export type TUsePeopleRequest = TResourcePagination<IPeople>;
export type TUseFilmsRequest = TResourcePagination<IFilm>;
export type TUseSpeciesRequest = TResourcePagination<ISpecies>;
export type TUseVehiclesRequest = TResourcePagination<IVehicle>;
export type TUseStarshipsRequest = TResourcePagination<IStarship>;
export type TUseResourceGroupRequest = TResourceGroup<
  Partial<TResource>,
  TResource
>;

export type TResourceGroup<T1, T2> = () => [T2[], T1, boolean, string?];
export type TResourcePagination<T> = () => [
  T[],
  IPaginationProps,
  boolean,
  string?
];
