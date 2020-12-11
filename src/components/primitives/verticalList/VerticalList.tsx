import React, { ReactElement } from 'react';
import VerticalListItem from './components/VerticalListItem';

type Props = {
    children: ReactElement[];
};

const VerticalList: React.FC<Props> = ({ children }) => (
    <ul>
        {React.Children.map(children, (child, index) => (
            <VerticalListItem key={child?.key || index}>
                {child}
            </VerticalListItem>
        ))}
    </ul>
);

export default VerticalList;
