import React from 'react';
import { Link } from 'react-router-dom';
import createClassName from 'classnames';
import classnames from './Button.module.scss';

export enum ButtonType {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
    Link = 'link',
}

export enum ButtonStyle {
    Primary,
    Secondary,
}

type Props = {
    type: ButtonType;
    children: React.ReactNode;
    to?: string;
    style?: ButtonStyle;
};

const Button: React.FC<Props> = ({
    children,
    type,
    to,
    style = ButtonStyle.Primary,
}) => {
    const className = createClassName(classnames.button, {
        [classnames.isStylePrimary]: style === ButtonStyle.Primary,
        [classnames.isStyleSecondary]: style === ButtonStyle.Secondary,
        [classnames.isLink]: type === ButtonType.Link,
    });

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
