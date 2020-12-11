import { eventDetail } from './routes';
import { createPathFromRoute } from '@freshheads/javascript-essentials/build/routing/routeGenerator';

export const createEventDetailPath = (id: string, slug: string) => {
    return createPathFromRoute(eventDetail, {
        ':id': id,
        ':slug': slug,
    });
};
