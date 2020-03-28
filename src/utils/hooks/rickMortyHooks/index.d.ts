import { IPaginationProps } from '~utils/hooks/paginationHooks/index.d';
import { HTMLAttributes } from 'react';

export type TResourceGroup<T1, T2> = () => [T2[], T1, boolean, string?];
export type TResourcePagination<T> = () => [
  T[],
  IPaginationProps,
  boolean,
  string?
];
export type OnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  onChange: OnChangeEvent;
  value: string;
}

export type TUseSearch<T> = () => [IInputProps, T[], boolean, string];
