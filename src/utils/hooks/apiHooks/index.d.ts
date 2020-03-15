import { IParsedPlanet, IParsedPeople } from '~typings/swapi/index.d';
import { IPaginationProps } from '~utils/paginationHooks/index.d';

export type TUsePlanetsRequest = TResourcePagination<IParsedPlanet>;
export type TUsePeopleRequest = TResourcePagination<IParsedPeople>;

export type TResourcePagination<T> = () => [T[], IPaginationProps];
