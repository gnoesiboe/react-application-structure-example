import React from 'react';
import { contact, home } from '../../../routing/routes';
import MainNavigationItem from './components/MainNavigationItem';

const MainNavigation: React.FC = () => (
    <nav>
        <ul>
            <li>
                <MainNavigationItem title="home" path={home} />
            </li>
            <li>
                <MainNavigationItem title="contact" path={contact} />
            </li>
        </ul>
    </nav>
);

export default MainNavigation;
