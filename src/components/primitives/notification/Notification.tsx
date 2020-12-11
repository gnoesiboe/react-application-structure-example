import React, { ReactNode } from 'react';

export enum ErrorType {
    Success,
    Notice,
    Error,
}

type Props = {
    type: ErrorType;
    children: ReactNode;
};

const Notification: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>;
};

export default Notification;
