import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    title: string;
    path: string;
    introduction?: string;
    image?: string;
};

const Card: React.FC<Props> = ({ title, path, introduction, image }) => (
    <Link to={path}>
        {image && <img src={image} alt={title} />}
        <h3>{title}</h3>
        {introduction && <p>{introduction}</p>}
    </Link>
);

export default Card;
