import React, { ErrorInfo } from 'react';
import { isDevEnvironment } from '../../utilities/environmentUtilities';
import Heading, { HeadingTag } from '../primitives/heading/Heading';
import Island from '../primitives/island/Island';

type Props = {
    error: Error;
    errorInfo: ErrorInfo;
};

const Error: React.FC<Props> = ({ error, errorInfo }) => (
    <div>
        <Heading tag={HeadingTag.H1}>Oops! Something went wrong!</Heading>
        {isDevEnvironment && (
            <>
                <Island>
                    <Heading tag={HeadingTag.H2}>Error</Heading>
                    <pre>{error.toString()}</pre>
                </Island>
                <Island>
                    <Heading tag={HeadingTag.H2}>Component stack</Heading>
                    <pre>{errorInfo.componentStack}</pre>
                </Island>
            </>
        )}
    </div>
);

export default Error;
