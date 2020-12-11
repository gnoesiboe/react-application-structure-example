import { Event } from './../../../../model/event/Event.d';
import { fetchEvent } from './../../../../repository/eventRepository';
import usePromiseEffect from '@freshheads/javascript-essentials/build/react/hooks/usePromiseEffect';

export default function useFetchEventDetails(id: string, slug: string) {
    const { value: event, pending, error } = usePromiseEffect<Event>(
        () => fetchEvent(id, slug),
        [id, slug] // will refetch on id or slug change
    );

    return { event, pending, error };
}
