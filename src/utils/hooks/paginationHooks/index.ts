import { useState, useEffect } from 'react';

import TPaginationHook from './index.d';

const usePagination: TPaginationHook.UsePagination = (
  range: number[] = [],
  page: number = 0
) => {
  const [pageRange, setPageRange] = useState<number[]>(range);
  const [currentPage, setCurrentPage] = useState<number>(page);

  const nextPage: TPaginationHook.NextPage = () => {
    setCurrentPage(state => state + 1);
  };

  const prevPage: TPaginationHook.PrevPage = () => {
    setCurrentPage(state => state - 1);
  };

  const goToPage: TPaginationHook.GoToPage = index => {
    if (index !== currentPage) setCurrentPage(index);
  };

  return { pageRange, currentPage, setPageRange, nextPage, prevPage, goToPage };
};

export { usePagination };
