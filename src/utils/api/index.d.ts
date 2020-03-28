import { ISwapiResources, IResourceResponse, TResource } from './swapi/index.d';
type ValueOf<T> = T[keyof T];

export type TFetchRequest = (
  url: ValueOf<ISwapiResources>,
  options?: RequestInit
) => Promise<IResourceResponse<TResource> | Error>;

export type TStatusReducer = (
  response: Response
) => Promise<IResourceResponse<TResource> | Error>;

export { IResourceResponse };
