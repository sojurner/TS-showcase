import React from 'react';

import { IPaginationProps } from '~utils/hooks/paginationHooks/index.d';

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  prevPage,
  pageRange,
  goToPage,
  nextPage
}) => {
  return (
    <footer>
      <button disabled={!(currentPage > 0)} children={'<'} onClick={prevPage} />

      {Boolean(pageRange.length) &&
        pageRange.map((page, index) => (
          <span
            key={`pageNum-${page}`}
            onClick={goToPage.bind(null, index)}
            children={page}
            style={{
              margin: '0 10px',
              fontWeight: index === currentPage ? 'bold' : 'initial'
            }}
          />
        ))}
      <button
        disabled={!(currentPage < pageRange.length - 1)}
        children={'>'}
        onClick={nextPage}
      />
    </footer>
  );
};

export default Pagination;
