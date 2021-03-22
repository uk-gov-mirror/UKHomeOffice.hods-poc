import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Pagination.scss';

export type PaginationProps = StandardProps & {
  /** Description for the 'heading' prop */
  heading?: string
};

export const Pagination: FC<PaginationProps> = ({ children, classBlock, classModifiers, className, heading, ...attrs }) => {
  const classes = classBuilder('hods-pagination', classBlock, classModifiers, className);
  const title = heading || 'pagination';

  return (
    <div class="hods-pagination" aria-label="Pagination">
      <div class="hods-pagination__summary">Showing 101 - 150 of 246 results</div>
      <ul class="hods-pagination__list-items">
        <li class="hods-pagination__item"><a class="hods-pagination__link" href="#0" aria-label="Previous page"><span aria-hidden="true" role="presentation">&laquo;</span> Previous</a></li>
        <li class="hods-pagination__item"><a class="hods-pagination__link" href="#0" aria-label="Page 1">1</a></li>
        <li class="hods-pagination__item"><a class="hods-pagination__link" href="#0" aria-label="Page 2">2</a></li>
        <li class="hods-pagination__item"><a class="hods-pagination__link current" href="#0" aria-current="true" aria-label="Page 3, current page">3</a></li>
        <li class="hods-pagination__item"><a class="hods-pagination__link" href="#0" aria-label="Page 4">4</a></li>
        <li class="hods-pagination__item"><a class="hods-pagination__link" href="#0" aria-label="Page 5">5</a></li>
        <li class="hods-pagination__item"><a class="hods-pagination__link" href="#0" aria-label="Next page">Next <span aria-hidden="true" role="presentation">&raquo;</span></a></li>
      </ul>
    </div>
  );
};

export default Pagination;
