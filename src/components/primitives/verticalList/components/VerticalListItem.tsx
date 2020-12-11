import React from 'react';

type Props = {
    children: React.ReactNode;
};

/**
 * @internal
 */
const VerticalListItem: React.FC<Props> = ({ children }) => <li>{children}</li>;

export default VerticalListItem;
