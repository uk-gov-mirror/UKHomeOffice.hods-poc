import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Pagination from '../src/Pagination';

describe('Pagination', () => {
  describe('when given valid props', () => {
    const component = mount(h(Pagination, { heading: 'My heading' }, 'Child'));

    it('renders', () => undefined);
  });
});
