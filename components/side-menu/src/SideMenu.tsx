import { useEffect, FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/SideMenu.scss';

export type SideMenuProps = StandardProps & {
  /** Description for the 'heading' prop */
  heading?: string
};

export const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export const SideMenu: FC<SideMenuProps> = ({ children, classBlock, classModifiers, className, heading, ...attrs }) => {
  const classes = classBuilder(
    'hods-side-menu',
    classBlock,
    classModifiers,
    className
  );

  useScript('./script.js');

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-third">
        <ul className="tab__nav">
          <li>
            <a className="active" data-target="central">
              London - Central
            </a>
          </li>
          <li>
            <a className="" data-target="south">
              London - South
            </a>
          </li>
        </ul>
      </div>

      <div className="govuk-grid-column-two-thirds">
        <div className="tab__content" id="central">
          <form>
            <fieldset className="govuk-fieldset">
              <legend className="govuk-visually-hidden">London boroughs - Central</legend>
              <div className="govuk-checkboxes">
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-1" name="central" type="checkbox" value="Camden"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-1">Camden</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-2" name="central" type="checkbox" value="City of London"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-2">City of London</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-3" name="central" type="checkbox" value="Kensington and Chelsea"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-3">Kensington and Chelsea</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-4" name="central" type="checkbox" value="Islington"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-4">Islington</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-5" name="central" type="checkbox" value="Lambeth"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-5">Lambeth</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-6" name="central" type="checkbox" value="Southwark"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-6">Southwark</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-7" name="central" type="checkbox" value="Westminster"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-7">Westminster</label>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="tab__content js-hidden" id="south">
          <form>
            <fieldset className="govuk-fieldset">
              <legend className="govuk-visually-hidden">London boroughs - South</legend>
              <div className="govuk-checkboxes">
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-south-1" name="south" type="checkbox" value="Bromley"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-south-1">Bromley</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-south-2" name="south" type="checkbox" value="Croydon"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-south-2">Croydon</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-south-3" name="south" type="checkbox" value="Kingston upon Thames"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-south-3">Kingston upon Thames</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-south-4" name="south" type="checkbox" value="Merton"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-south-4">Merton</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-south-5" name="south" type="checkbox" value="Richmond upon Thames"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-south-5">Richmond upon Thames</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-south-6" name="south" type="checkbox" value="Sutton"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-south-6">Sutton</label>
                </div>
                <div className="govuk-checkboxes__item">
                  <input className="govuk-checkboxes__input" id="london-south-7" name="south" type="checkbox" value="Wandsworth"/>
                  <label className="govuk-label govuk-checkboxes__label" htmlFor="london-south-7">Wandsworth</label>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
