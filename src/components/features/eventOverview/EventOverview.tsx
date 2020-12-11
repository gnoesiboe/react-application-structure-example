import React from 'react';
import LoadingIndicator from '../../primitives/loadingIndicator/LoadingIndicator';
import Notification, {
    ErrorType,
} from '../../primitives/notification/Notification';
import VerticalList from '../../primitives/verticalList/VerticalList';
import EventOverviewItem from './components/EventOverviewItem';
import useFetchEvents from './hooks/useFetchEvents';
import classnames from './EventOverview.module.scss';
import Heading, { HeadingTag } from '../../primitives/heading/Heading';

const EventOverview: React.FC = () => {
    const { events, pending, error } = useFetchEvents();

    if (pending) {
        return <LoadingIndicator />;
    }

    if (error) {
        return (
            <Notification type={ErrorType.Error}>
                Er is iets foutgegaan bij het inladen van de evenementen.
                Probeer het later opnieuw.
            </Notification>
        );
    }

    if (!events) {
        throw new Error('Expecting events to be available at this point');
    }

    return (
        <div className={classnames.container}>
            <Heading tag={HeadingTag.H1}>Evenementen</Heading>
            <VerticalList>
                {events.map((event) => (
                    <EventOverviewItem event={event} />
                ))}
            </VerticalList>
        </div>
    );
};

export default EventOverview;
