import { useState, useEffect } from 'react';

import TPaginationHook from './index.d';

const usePagination: TPaginationHook.UsePagination = () => {
  const [pageRange, setPageRange] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

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
