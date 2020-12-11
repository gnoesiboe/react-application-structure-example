import React, { ReactNode } from 'react';
import classnames from './../MainLayout.module.scss';

export type Props = {
    children: ReactNode;
};

const MainLayoutHeader: React.FC<Props> = ({ children }) => (
    <div className={classnames.header}>{children}</div>
);

export default MainLayoutHeader;
