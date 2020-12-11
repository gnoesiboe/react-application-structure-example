import React from 'react';
import { home } from '../../../routing/routes';
import NotFound from '../../pages/NotFound';
import Button, { ButtonType } from '../../primitives/button/Button';
import Heading, { HeadingTag } from '../../primitives/heading/Heading';
import LoadingIndicator from '../../primitives/loadingIndicator/LoadingIndicator';
import Notification, {
    ErrorType,
} from '../../primitives/notification/Notification';
import useFetchEventDetails from './hooks/useFetchEventDetails';
import classnames from './EventDetails.module.scss';

type Props = {
    id: string;
    slug: string;
};

const EventDetails: React.FC<Props> = ({ id, slug }) => {
    const { event, pending, error } = useFetchEventDetails(id, slug);

    if (pending) {
        return <LoadingIndicator />;
    }

    if (error) {
        return (
            <Notification type={ErrorType.Error}>
                Er is iets foutgegaan bij het inladen van het evenement. Probeer
                het later opnieuw.
            </Notification>
        );
    }

    if (!event) {
        return <NotFound title="Event not found!" />;
    }

    return (
        <div className={classnames.container}>
            <Heading tag={HeadingTag.H1}>{event.title}</Heading>
            <p>{event.description}</p>
            <Button type={ButtonType.Link} to={home}>
                ← back to overview
            </Button>
        </div>
    );
};

export default EventDetails;
