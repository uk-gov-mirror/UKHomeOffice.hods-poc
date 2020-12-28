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
      <h1>
        <span className="caption">Get started</span>
        Set up a new project
      </h1>
        <p>This guide will show you how to quickly bootstrap a new project that uses the Home Office Design System.</p>

        <p>For our purposes, a project is a monorepo (see: Design Decisions) that can contain multiple applications as well as shared libraries and UI components. A project also provides a convenient way to document and share any components that your team builds.</p>

      <h2 className="govuk-heading-m">Before you start</h2>
        <p>You'll need:</p>
          <ul>
            <li><A href="https://nodejs.org/en/">Node.js</A></li>
            <li>pnpm installed</li>
          </ul>
          <pre>
            <code>
              npm install -g pnpm
            </code>
          </pre>

        <h2 className="govuk-heading-m">1. Set up your repository</h2>
          <p>You should first set up a blank code repository in the provider of your choice. For the purposes of this document we will assume <A href="https://github.com/">GitHub</A> as we provide extra CI support through <A href="https://github.com/features/actions">GitHub Actions</A>.</p>

        <h2 className="govuk-heading-m">2. Run the following commands locally</h2>
          <p>The parts in ALL CAPS should be replaced with something specific to you:</p>
          <pre>
            <code>
            mkdir YOUR-PROJECT
            cd YOUR-PROJECT
            git init
            git remote add origin git@github.com:YOUR_USER/YOUR-PROJECT.git
            npm init @hods project
            </code>
          </pre>

        <h2 className="govuk-heading-m">3. Answer the interactive prompts</h2>
          <p>The generator / initialiser will ask you some questions but the defaults should be fine. You can accept the default by simply pressing enter.</p>
          <p>After the project has been generated, you should pull down the dependencies:</p>
            <pre>
            pnpm install
            </pre>

        <h2 className="govuk-heading-m">4. Commit and push your new project</h2>
          <p>Run the following commands to push up the first version of your new project to your remote code repository:</p>
            <pre>
            <code>
              git add .
              git commit -m 'Initial commit'
              git push -u origin master
              </code>
            </pre>

        <h2 className="govuk-heading-m">5. Start working on your project</h2>
          <p>Read the generated README for details on how to work on your project and the tools you will need to have installed. See also: <A href="https://hods-poc.netlify.app/working-on-your-project">Working on your project</A>.</p>

        <h2 className="govuk-heading-m">6. Optional: Set up Continuous Integration</h2>
          <p>We provide some workflows for <A href="https://github.com/features/actions">GitHub Actions</A> to help you set-up Continuous Integration (CI) for your project. This allows you to gain assurance over proposed changes to your project by doing things like running unit tests, visual regression tests on components, and building and testing your applications.</p>

          <p> The unit tests and builds should run with no extra set-up if you are using GitHub. (You will need translate them into another CI system if you wish to use something else.) The others will require some work to set them up.</p>

          <h3 className="govuk-heading-s">6.1 Chromatic</h3>
            <p>We provide a workflow for publishing your Storybook to the <A href="https://www.chromatic.com/">Chromatic</A> service. This allows you to detect and review any visual changes made to your components and so avoid accidental regressions.</p>

              <ul className="plain">
                <li>1. Sign up and <A href="https://www.chromatic.com/start">log in to Chromatic</A></li>
                <li>2. Add your project</li>
                <li>3. Take note of your 'project token'</li>
                <li>4. Create a new secret in GitHub called CHROMATIC_PROJECT_TOKEN with the value set to the one provided to you by Chromatic.</li>
              </ul>
            <p>Once that is done you should be able to detect and review visual changes to your components.</p>

            <p>You should consider making these checks mandatory to prevent unauthorised changes being merged in to your master branch.</p>

        <h2 className="govuk-heading-m">7. Optional: Set up Continuous Deployment</h2>
              <p>The included 'docs' application can be automatically deployed to <A href="https://www.netlify.com/">Netlify</A>. This allows you to introduce people to your project as well as any components and libraries that you publish whilst remaining 'on brand'.</p>
              <ul className="plain">
                <li>1. Sign up and <A href="https://app.netlify.com/">log in to Netlify</A></li>
                <li>2. Create a new site by following the <A href="https://docs.netlify.com/">Netlify documentation</A> To avoid giving unnecessary access to Netlify, consider using the CLI tool as follows:</li>
                <pre>
                <code>npm install netlify-cli -g
                netlify login
                netlify init --manual
                </code>
                </pre>
                <p>You can safely ignore the ssh key and webhook as we will be building on GitHub Actions instead of Netlify.</p>

                <li>3. <A href="https://docs.netlify.com/cli/get-started/#link-and-unlink-sites">Create a new secret</A> in GitHub called NETLIFY_SITE_ID</li>
                <li>4. <A href="https://docs.netlify.com/cli/get-started/#obtain-a-token-in-the-netlify-ui">Create a new secret</A> in GitHub called NETLIFY_AUTH_TOKEN </li>
              </ul>
              <p>Once this is in place your Netlify site should be updated whenever you push to your master branch.</p>
              <p>Once your website is up and running, you should consider linking to it from your README, your package.json and your GitHub repository.</p>

        <h2 className="govuk-heading-m">8. Protect the master branch</h2>
              <p>You should consider protecting your master branch to gain the full benefits of CI. In particular you might want to make the following checks mandatory prior to merging:</p>
              <ul>
                <li>'Unit test'</li>
                <li>'Build' (which ensures your apps can be built)</li>
                <li>UI Tests' & 'UI Review' (which protect you against visual regressions)</li>
              </ul>
    </div>
  </div>
);

export default Page;
export const title = 'Get started';
