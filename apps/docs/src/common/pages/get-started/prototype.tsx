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
        Prototyping
      </h1>
        <p>There are two different ways to set up the Home Office prototype, depending on whether your team uses the HODS production framework for its build:</p>
        <ul>
        <li>blank ‘app’ within the development project - if your project uses the HODS production framework, you might consider having the developers create a blank 'app' within the project for you to make it easier to transform your prototype into a production application</li>
        <li>‘standalone’ prototype - if your project is not using the HODS production framework but you want to quickly try out the system to test ideas with users, you can set this up yourself by following the steps below</li>
        </ul>

        <h2 className="govuk-heading-m">Before you start</h2>
          <p>You'll need:</p>
            <ul>
              <li><A href="https://nodejs.org/en/">Node.js</A></li>
            </ul>

        <h2 className="govuk-heading-m">1. Run the following commands locally</h2>
          <p>Using terminal, run the following commands below (the parts in ALL CAPS should be replaced with something specific to you):
          </p>
          <pre>
            <code>
            mkdir YOUR-PROTOTYPE
            cd YOUR-PROTOTYPE
            git init
            npm init @hods prototype
            </code>
          </pre>
        <h2 className="govuk-heading-m">2. Answer the interactive prompts</h2>
          <p>The generator / initialiser will ask you some questions but the defaults should be fine. You can accept the default by simply pressing enter.</p>
          <p>After the prototype has been generated, you should pull down the dependencies:</p>
            <pre>
              <code>
              npm install
              </code>
            </pre>

        <h2 className="govuk-heading-m">3. View the prototype locally</h2>
        <pre>
          <code>
              npm run dev
          </code>
        </pre>

          <p>When your terminal returns a message that says:</p>
          <pre>
            <code>
            No issues found
            </code>
          </pre>
          <p>You can see the prototype by opening <A href="http://localhost:8080/">http://localhost:8080/</A> in your browser.</p>

        <h2 className="govuk-heading-m">4. Set up your remote repository</h2>
          <p>If you want to deploy your prototype so it can be tested with users or allow others to collaborate on it, you can set up a blank code repository in <A href="https://github.com/">GitHub</A></p>


        <h2 className="govuk-heading-m">5. Commit and push your new prototype</h2>
          <p>Run the following commands to push up the first version of your new prototype to your remote code repository:</p>
          <pre>
            <code>
            git remote add origin git@github.com:YOUR_USER/YOUR-PROTOTYPE.git
            git push -u origin master
            </code>
          </pre>
    </div>
  </div>
);

export default Page;
export const title = 'Get started';
