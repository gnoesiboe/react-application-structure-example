import React from 'react';
import { Event } from '../../../../model/event/Event';
import { createEventDetailPath } from '../../../../routing/urlGenerator';
import Card from '../../../primitives/card/Card';

type Props = {
    event: Event;
};

const EventOverviewItem: React.FC<Props> = ({ event: { id, slug, title } }) => {
    const path = createEventDetailPath(id, slug);

    return <Card path={path} title={title} />;
};

export default EventOverviewItem;
