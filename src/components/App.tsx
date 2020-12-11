import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import useScrollToTopOnPathChange from '../hooks/useScrollToTopOnPathChange';
import { contact, eventDetail, home } from '../routing/routes';
import Contact from './pages/Contact';
import EventDetail from './pages/EventDetail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ErrorBoundary from '@freshheads/javascript-essentials/build/react/components/ErrorBoundary';
import Error from './pages/Error';
import MainLayout from './primitives/mainLayout/MainLayout';
import MainNavigation from './features/mainNavigation/MainNavigation';

const App: React.FC = () => {
    useScrollToTopOnPathChange();

    return (
        <BrowserRouter>
            <MainLayout.Container>
                <MainLayout.Header>
                    <MainNavigation />
                </MainLayout.Header>
                <MainLayout.Content>
                    <ErrorBoundary
                        renderFallback={(error, errorInfo) => (
                            <Error error={error} errorInfo={errorInfo} />
                        )}
                    >
                        <Switch>
                            <Route exact path={home} component={Home} />
                            <Route
                                exact
                                path={eventDetail}
                                component={EventDetail}
                            />
                            <Route exact path={contact} component={Contact} />
                            <Route component={NotFound} />
                        </Switch>
                    </ErrorBoundary>
                </MainLayout.Content>
            </MainLayout.Container>
        </BrowserRouter>
    );
};

export default App;
