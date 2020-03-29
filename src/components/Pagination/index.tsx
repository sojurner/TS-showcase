import React from 'react';

import { IPaginationProps } from '~utils/hooks/paginationHooks/index.d';
import styles from './Pagination.module.scss';

const [swapiClass, rickMortyClass, pageClass, pageActiveClass] = Object.values(
  styles
).slice(1);

interface ICustomPaginationProps extends IPaginationProps {
  className: string;
}

const Pagination: React.FC<ICustomPaginationProps> = ({
  currentPage,
  prevPage,
  pageRange,
  goToPage,
  nextPage,
  ...props
}) => {
  return (
    <footer {...props}>
      <button disabled={!(currentPage > 0)} children={'←'} onClick={prevPage} />

      {Boolean(pageRange.length) &&
        pageRange.map((page, index) => (
          <span
            key={`pageNum-${page}`}
            onClick={goToPage.bind(null, index)}
            children={page}
            className={index === currentPage ? pageActiveClass : pageClass}
          />
        ))}
      <button
        disabled={!(currentPage < pageRange.length - 1)}
        children={'→'}
        onClick={nextPage}
      />
    </footer>
  );
};

const SwapiPagination: React.FC<IPaginationProps> = props => {
  return <Pagination {...props} className={swapiClass} />;
};

const RickMortyPagination: React.FC<IPaginationProps> = props => {
  return <Pagination {...props} className={rickMortyClass} />;
};

export { SwapiPagination, RickMortyPagination, Pagination as default };
