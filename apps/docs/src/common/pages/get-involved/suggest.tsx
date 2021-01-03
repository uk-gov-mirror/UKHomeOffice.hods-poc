import { FC, Fragment, createElement as h } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageProps } from '@not-govuk/app-composer';
import { A } from '@not-govuk/components';

const Page: FC<PageProps> = ({ location }) => (
  <div className="govuk-grid-row">
    <Helmet>
      <title>Suggest a new pattern or component - Home Office Design System</title>
      <meta name="og:article:section" content="Get involved" />
    </Helmet>
    <div className="govuk-grid-column-one-third">
      <aside>
        <h2>Get involved</h2>
        <ul className="plain">
        <li><A href="/get-involved/working">Working group</A></li>
        <li><A href="/get-involved/backlog">Backlog</A></li>
        <li><A href="/get-involved/suggest">Suggest new ideas</A></li>
        <li><A href="/get-involved/githubguide">Using GitHub to propose design system changes</A></li>
        <li><A href="/get-involved/proving">Proving ideas work</A></li>
        <li><A href="/get-involved/using">Using the system</A></li>
        </ul>
      </aside>
    </div>
    <div className="govuk-grid-column-two-thirds">
    <h1 className="govuk-heading-l">Suggest a new pattern or component</h1>
          <p>Anyone can suggest adding a new component or pattern to the Home Office design system.</p>

          <h2 className="govuk-heading-m">1. Check the backlog</h2>
          <p>Check if the pattern or component is already on the <A href="https://github.com/UKHomeOffice/design-system/projects/1">backlog</A>. If it is, feel free to comment and post screenshots of your example. Tell the working group if you want to contribute to it.</p>

          <h2 className="govuk-heading-m">2. Share the work</h2>
          <p>Talk about the pattern or component to the community. Share your work, as other teams might be working on the same thing. Gather feedback and examples from the community.</p>

          <h2 className="govuk-heading-m">3. Raise a new issue</h2>
          <p>If your idea is not on the backlog, <A href="https://github.com/UKHomeOffice/design-system/issues">raise an issue in Github</A>. You can use our <A href="/getinvolved/githubguide">Github guide</A> to help you do this, or get in touch with <A href="mailto:design@digital.homeoffice.gov.uk">the working group</A>.</p>
          <p> The working group will get in touch to discuss your proposal.</p>
          <p>When raising an issue, explain why you think it should be included in the design system. You can also include screenshots and research notes.</p>

    </div>
  </div>
);

export default Page;
export const title = 'Get involved';
