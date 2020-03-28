type ParamVoidable<T> = (arg: T) => void;
type NoParamVoidable = () => void;

export type NextPage = NoParamVoidable;
export type PrevPage = NoParamVoidable;
export type GoToPage = ParamVoidable<number>;
export type SetPageRange = React.Dispatch<React.SetStateAction<number[]>>;

type UsePagination = (
  pageRange: number[],
  currentPage: number
) => IUsePaginationProps;

export interface IUsePaginationProps extends IPaginationProps {
  setPageRange: SetPageRange;
}

export interface IPaginationProps {
  pageRange: number[];
  currentPage: number;
  goToPage: GoToPage;
  nextPage: NextPage;
  prevPage: PrevPage;
  goToPage: GoToPage;
}
