import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import SideMenu from '../src/SideMenu';

describe('SideMenu', () => {
  describe('when given valid props', () => {
    const component = mount(h(SideMenu, { heading: 'My heading' }, 'Child'));

    it('renders', () => undefined);
  });
});
