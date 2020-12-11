import React from 'react';

type Props = {
    children: React.ReactNode;
};

const Island: React.FC<Props> = ({ children }) => <div>{children}</div>;

export default Island;
