import React from 'react';
import Heading, { HeadingTag } from '../primitives/heading/Heading';

const Contact: React.FC = () => (
    <div>
        <Heading tag={HeadingTag.H1}>Contact</Heading>
        <p>
            Send me an email at:
            <a href="mailto:gijs.nieuwenhuis@freshheads.com">
                gijs.nieuwenhuis@freshheads.com
            </a>
        </p>
    </div>
);

export default Contact;
