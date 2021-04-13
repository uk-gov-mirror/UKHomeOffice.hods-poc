import React, { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Pagination from '../src/Pagination';

describe('Pagination', () => {
  describe('when given valid props', () => {
    const component = mount(h(Pagination, {
      results: "249",
      resultsPerPage: "25",
      page: "3"
    }));

    it('renders', () => undefined);
  });

  // TODO when given no props
});
