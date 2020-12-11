import React, { ReactNode } from 'react';

export enum HeadingTag {
    H1 = 'h1',
    H2 = 'h2',
}

type Props = {
    tag: HeadingTag;
    children: ReactNode;
};

const Heading: React.FC<Props> = ({ children, tag }) => {
    const className = 'heading';

    return React.createElement(tag, { className }, children);
};

export default Heading;
