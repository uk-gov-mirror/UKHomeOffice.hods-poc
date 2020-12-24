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
      <h1>
        <span className="caption">Get started</span>
        Starting a project for developers
      </h1>
        <p>This guide explains how to set up a project in production using the
        coded React examples from the Home Office Design System.</p>

        <p>In order to consume these components you will require a system that utilised a bundler (such as <A href="https://webpack.js.org/">Webpack</A>) that can process imported assets such as images, fonts and <A href="https://sass-lang.com/">Sass</A> files. <A href="https://create-react-app.dev/">Create React App</A> may be able to do this but does not provide Server-Side Rendering (SSR). You will also need to ensure that you provide an instance of <A href="https://reactrouter.com/">react-router</A>.</p>

        <p>As such, we suggest that you use our specially designed tech stack for this purpose. You can start a brand new project or prototype using the following steps.</p>

        <h2 className="govuk-heading-m">1. Set up your repository</h2>
          <p>You should first set up a blank code repository in the provider of your choice. For the purposes of this document I will assume <A href="https://github.com/">GitHub</A> as we provide extra CI support through <A href="https://github.com/features/actions">GitHub Actions</A>.</p>

        <h2 className="govuk-heading-m">2. Run the following commands locally</h2>
          <p>The parts in ALL CAPS should be replaced with something specific to you:</p>
          <ul>
            <li>mkdir YOUR-PROJECT</li>
            <li>cd YOUR-PROJECT</li>
            <li>git init</li>
            <li>git remote add origin git@github.com:YOUR_USER/YOUR-PROJECT.git</li>
            <li>npm init @hods</li>
          </ul>

        <h2 className="govuk-heading-m">3. Answer the interactive prompts</h2>
          <p>Our generator / initialiser will ask you some questions about your new project.</p>
          <p>The most important choice is whether to start a new project or a prototype:</p>
            <ul>
              <li>Prototype: A simple stand-alone application. Use this if you just want to play around with the components or you want to build a prototype prior to starting a full project. (If you already have a project, you might prefer to run npm run create:app instead.)</li>
              <li>Project: A monorepo designed to handle an entire project including multiple applications, and reusable libraries and components.</li>
            </ul>
          <p>If you create a new project you should pull down dependencies at this point in order to update your lock-file:</p>
            <ul>
              <li>pnpm install</li>
            </ul>

        <h2 className="govuk-heading-m">4. Commit and push your new project</h2>
          <p>Run the following commands to push up the first version of your new project to your remote code repository:</p>
            <ul>
              <li>git add .</li>
              <li>git commit -m 'Initial commit'</li>
              <li>git push -u origin master</li>
            </ul>

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
                <ul className="plain">
                <li>npm install netlify-cli -g</li>
                <li>netlify login</li>
                <li>netlify init --manual</li>
                </ul>
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
