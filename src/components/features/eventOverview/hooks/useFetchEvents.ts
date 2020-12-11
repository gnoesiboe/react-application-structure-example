import { fetchEvents } from './../../../../repository/eventRepository';
import { Event } from './../../../../model/event/Event';
import usePromiseEffect from '@freshheads/javascript-essentials/build/react/hooks/usePromiseEffect';

export default function useFetchEvents() {
    const { value: events, pending, error } = usePromiseEffect<Event[]>(
        () => fetchEvents(),
        [] // will only be fetched on mount
    );

    return { events, pending, error };
}
