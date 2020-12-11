import React, { lazy, Suspense } from 'react';
import { useParams } from 'react-router';
import LoadingIndicator from '../primitives/loadingIndicator/LoadingIndicator';

type RouteParams = {
    id: string;
    slug: string;
};

const EventDetails = lazy(
    () =>
        import(
            /* webpackChunkName: "event_details" */ '../features/eventDetails/EventDetails'
        )
);

const EventDetail: React.FC = () => {
    const { id, slug } = useParams<RouteParams>();

    return (
        <Suspense fallback={<LoadingIndicator />}>
            <EventDetails id={id} slug={slug} />
        </Suspense>
    );
};

export default EventDetail;
