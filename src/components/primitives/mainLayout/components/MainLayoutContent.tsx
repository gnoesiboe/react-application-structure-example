import React, { ReactNode } from 'react';
import classnames from './../MainLayout.module.scss';

export type Props = {
    children: ReactNode;
};

const MainLayoutContent: React.FC<Props> = ({ children }) => (
    <div className={classnames.content}>{children}</div>
);

export default MainLayoutContent;
