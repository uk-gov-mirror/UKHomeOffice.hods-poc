import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <div className="govuk-grid-column-one-third">
      <aside>
      <h2>Get started</h2>
        <ul className="plain">
          <li><A href="/get-started/prototype">Prototyping</A></li>
          <li><A href="/get-started/project">Production code</A></li>
        </ul>
      </aside>
    </div>
    <div className="govuk-grid-column-two-thirds">
      <h1>Get started</h1>
      <p>A set of guides to help teams design and build services in Government.</p>      
          <p>This section covers how to:</p>
          <ul>
            <li><A href="/get-started/prototype">install and use standalone prototypes (for designers)</A></li>
            <li><A href="/get-started/project">set up entire projects for building production applications (for developers)</A></li>
          </ul>
          <p>In order to consume these components you will require a system that utilised a bundler (such as <A href="https://webpack.js.org/">Webpack</A>) that can process imported assets such as images, fonts and <A href="https://sass-lang.com/">Sass</A> files. <A href="https://create-react-app.dev/">Create React App</A> may be able to do this but does not provide Server-Side Rendering (SSR). You will also need to ensure that you provide an instance of <A href="https://reactrouter.com/">react-router</A>.</p>
    </div>
  </div>
);

export default Page;
export const title = 'Get started';
