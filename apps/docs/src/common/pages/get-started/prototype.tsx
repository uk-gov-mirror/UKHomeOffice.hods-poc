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
        Prototyping for designers
      </h1>
        <p>This guide explains how to quickly build prototypes to test ideas with users.</p>
        <h2 className="govuk-heading-m">1. Run the following commands locally</h2>
          <p>Using terminal, run the following commands below (the parts in ALL CAPS should be replaced with something specific to you):
          </p>
          <ul>
            <li>mkdir YOUR-PROTOTYPE</li>
            <li>cd YOUR-PROTOTYPE</li>
            <li>git init</li>
            <li>npm init @hods prototype</li>
          </ul>

        <h2 className="govuk-heading-m">2. Answer the interactive prompts</h2>
          <p>The generator / initialiser will ask you some questions but the defaults should be fine. You can accept the default by simply pressing enter.</p>
          <p>After the prototype has been generated, you should pull down the dependencies:</p>
            <ul>
              <li>npm install</li>
            </ul>

        <h2 className="govuk-heading-m">3. View the prototype locally</h2>
          <p>In a separate terminal window, enter the following command:</p>
            <ul>
              <li>npm run dev</li>
            </ul>
          <p>Once your terminal returns a message that says no issues have been found, you can see the prototype by opening <A href="http://localhost:8080/">http://localhost:8080/</A> in your browser.</p>

        <h2 className="govuk-heading-m">4. Set up your remote repository</h2>
          <p>If you want to to deploy your prototype so it can be tested with users or allow others to collaborate on it, you can set up a blank code repository in <A href="https://github.com/">GitHub</A></p>


        <h2 className="govuk-heading-m">5. Commit and push your new prototype</h2>
          <p>Run the following commands to push up the first version of your new prototype to your remote code repository:</p>
            <ul>
              <li>git add .</li>
              <li>git commit -m 'Initial commit'</li>
              <li>git remote add origin git@github.com:YOUR_USER/YOUR-PROTOTYPE.git</li>
              <li>git push -u origin master</li>
              </ul>
    </div>
  </div>
);

export default Page;
export const title = 'Get started';
