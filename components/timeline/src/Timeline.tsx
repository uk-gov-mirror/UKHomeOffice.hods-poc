import { FC, ReactNode, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Timeline.scss';

type TimelineItem = {
  /* date is used to set the datetime attribute of the <time> element so must
  be in the ISO format for a date or time. */
  action: string
  by?: string
  date: Date
  description: ReactNode
}

export type TimelineProps = StandardProps & {
  /* Items is a compulsory property of the Timeline component.
  Items consists of an array of item objects, each consisting of an
  action, the name of the person who performed the action (optional),
  the date (and time) the action was taken and a description of the action.
  */
  items: TimelineItem[]
};

export const Timeline: FC<TimelineProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  items,
  ...attrs
}) => {
  const classes = classBuilder(
    'hods-timeline',
    classBlock,
    classModifiers,
    className
  );
  return (
      <div className={classes()}>
        {items.map(e => (
          <div className={classes('item')} key={e.date.getTime()}>
            <h2 className={classes('title')}>{e.action}</h2>
            {!e.by ? null : (<p className={classes('by')}> by {e.by}</p>)}
            <p className={classes('date')}><time dateTime={e.date.toISOString()}>{e.date.toLocaleString('en-GB', { timeZone: 'UTC' })}</time></p>
            <p className={classes('description')}>{e.description}</p>
          </div>
        ))}
      </div>
  );
};

export default Timeline;
