import React, { lazy, Suspense } from 'react';
import Introduction from '../features/introduction/Introduction';
import Island from '../primitives/island/Island';
import LoadingIndicator from '../primitives/loadingIndicator/LoadingIndicator';

const EventOverview = lazy(
    () =>
        import(
            /* webpackChunkName: "event_overview" */ '../features/eventOverview/EventOverview'
        )
);

const Home: React.FC = () => (
    <>
        <Island>
            <Introduction />
        </Island>
        <Island>
            <Suspense fallback={<LoadingIndicator />}>
                <EventOverview />
            </Suspense>
        </Island>
    </>
);

export default Home;
