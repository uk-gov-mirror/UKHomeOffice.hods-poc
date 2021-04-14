import React, { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Pagination.scss';

export type PaginationProps = StandardProps & {
  results: number
  resultsPerPage: number
  page: number
  previous?: string
  pages?: number[]
  next?: string
};

export const Pagination: FC<PaginationProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  results,
  resultsPerPage,
  previous,
  page,
  pages,
  next,
  ...attrs
}) => {
  const classes = classBuilder(
    'hods-pagination',
    classBlock,
    classModifiers,
    className
  );

  var resultsFrom: number = ((page-1)*resultsPerPage)+1
  var resultsTo: number = resultsFrom + (resultsPerPage - 1)
  {resultsTo>results ? resultsTo=results : null}

  return (
    <div className={classes()}>
      <div className={classes('summary')}>Showing {resultsFrom} - {resultsTo} of {results} results</div>
      <ul className={classes('list-items')}>
        <li className={classes('item')} id="prevButton">
          <a className={classes('link')} href="#2">
            <span aria-hidden="true" role="presentation">&laquo;</span> Previous
          </a>
        </li>
        <li className={classes('item')}>
          {page>2 ? <a className={classes('link')} href="#1">{page-2}</a> : null}
        </li>
        <li className={classes('item')}>
          {page>1 ? <a className={classes('link')} href="#2">{page-1}</a> : null}
        </li>
        <li className={classes('item')}>
          <a className={classes('link-current')} href="#3" aria-current="true">{page}</a>
        </li>
        <li className={classes('item')}>
          {resultsTo==results ? null : <a className={classes('link')} href="#4">{page-(-1)}</a>}
        </li>
        <li className={classes('item')}>
          {resultsTo <= results - resultsPerPage ? <a className={classes('link')} href="#5">{page-(-2)}</a> : null}
        </li>
        <li className={classes('item')} id="nextButton">
          <a className={classes('link')} href="#5">
            Next <span aria-hidden="true" role="presentation">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
