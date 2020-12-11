import React from 'react';
import { Link } from 'react-router-dom';

export enum ButtonType {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
    Link = 'link',
}

type Props = {
    type: ButtonType;
    children: React.ReactNode;
    to?: string;
};

const Button: React.FC<Props> = ({ children, type, to }) => {
    const className = 'button';

    if (type === ButtonType.Link) {
        if (!to) {
            throw new Error(
                "Please provide a 'to' if you want to make a link button"
            );
        }

        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={className}>
            {children}
        </button>
    );
};

export default Button;
