import React, { ReactElement } from 'react';
import classnames from './../MainLayout.module.scss';
import MainLayoutContent, { Props as ContentProps } from './MainLayoutContent';
import MainLayoutHeader, { Props as HeaderProps } from './MainLayoutHeader';

type Props = {
    children: [
        ReactElement<HeaderProps, typeof MainLayoutHeader>,
        ReactElement<ContentProps, typeof MainLayoutContent>
    ];
};

const MainLayoutContainer: React.FC<Props> = ({ children }) => (
    <div className={classnames.container}>{children}</div>
);

export default MainLayoutContainer;
