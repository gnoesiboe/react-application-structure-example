import React from 'react';

type Props = {
    title?: string;
};

const NotFound: React.FC<Props> = ({ title = '404 Page not found' }) => (
    <div>
        <h1>{title}</h1>
    </div>
);

export default NotFound;
