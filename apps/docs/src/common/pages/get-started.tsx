import { FC, Fragment, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';


const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <div className="govuk-grid-column-one-third">
      <aside>
      <h2>Get started</h2>
        <ul className="plain">
          <li><A href="/get-started/prototype">Prototyping for designers</A></li>
          <li><A href="/get-started/project">Starting a project for developers</A></li>
        </ul>
      </aside>
    </div>






    <div className="govuk-grid-column-two-thirds">
      <h1>Get started</h1>
      <p>A set of guides to help teams design and build services in Government.</p>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <p>This section covers how to:</p>
          <ul>
            <li><A href="/get-started/prototype">install and use prototypes</A></li>
            <li><A href="/get-started/project">set up projects for build</A></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);

export default Page;
export const title = 'Get started';
