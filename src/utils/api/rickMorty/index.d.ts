import { ICharacter, ILocation, IEpisode } from '~typings/rickMorty/index.d';

export interface IPageResourceResponse<T> {
  info: IPageInfo;
  results: T[];
}
export interface IResponseBase {
  url: string;
  created: string;
}
export interface IRawResponse<T> extends T, IResponseBase {}

export interface IPageInfo {
  count: number;
  page: number;
  next: string;
  prev: string;
}

interface IPropertyInfo {
  name: string;
  url: string;
}

export interface IRawCharacter extends ICharacter, IResponseBase {
  origin: IPropertyInfo;
  location: IPropertyInfo;
}
export interface IRawLocation extends ILocation, IResponseBase {
  residents: string[];
}
export interface IRawEpisode extends IEpisode, IResponseBase {
  characters: string[];
}

export type FScrapeData = (
  data: TRawCharacter | TRawLocation | TRawEpisode
) => ICharacter | ILocation | IEpisode;

export function TGPageResourceSuccess<T>(response: T | Error): response is T {
  return response.hasOwnProperty('results');
}

export function TGCharacterResourceSuccess(
  response: IRawCharacter[] | IRawCharacter
): response is IRawCharacter[] {
  return Array.isArray(response);
}
