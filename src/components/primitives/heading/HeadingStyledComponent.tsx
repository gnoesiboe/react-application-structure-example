import React, { ReactNode } from 'react';
import styled from 'styled-components';

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

const StyledHeading = styled.h1<Omit<Props, 'tag'>>`
    display: block;
    margin: 0 0 30px;

    ${({ style }) =>
        style === HeadingStyle.Primary &&
        `
            border-bottom: 1px solid #ddd;
            padding: 0 0 10px;
        `}

    ${({ style }) => style === HeadingStyle.Secondary && `font-style: italic;`}
`;

const Heading: React.FC<Props> = ({ tag, ...otherProps }) => (
    <StyledHeading as={tag} {...otherProps} />
);

export default Heading;
