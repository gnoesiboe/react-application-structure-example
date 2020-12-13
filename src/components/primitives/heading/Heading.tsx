import React, { ReactNode } from 'react';
import createClassName from 'classnames';
import classnames from './Heading.module.scss';

export enum HeadingTag {
    H1 = 'h1',
    H2 = 'h2',
}

export enum HeadingStyle {
    Primary,
    Secondary,
}

type Props = {
    tag: HeadingTag;
    children: ReactNode;
    style?: HeadingStyle;
};

const Heading: React.FC<Props> = ({
    children,
    tag,
    style = HeadingStyle.Primary,
}) => {
    const className = createClassName(classnames.heading, {
        [classnames.isStylePrimary]: style === HeadingStyle.Primary,
        [classnames.isStyleSecondary]: style === HeadingStyle.Secondary,
    });

    return React.createElement(tag, { className }, children);
};

export default Heading;
