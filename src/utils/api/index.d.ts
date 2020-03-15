import { ISwapiResources } from './swapi/index.d';
type ValueOf<T> = T[keyof T];

export type TFetchRequest = (
  url: ValueOf<ISwapiResources>,
  options?: RequestInit
) => Promise<any>;

export type TStatusReducer = (response: Response) => Promise<any>;
