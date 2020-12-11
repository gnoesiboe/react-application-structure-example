import { Event } from './../model/event/Event';

export const fetchEvents = async (): Promise<Event[]> => {
    // Use fetch or Axios to fetch events from backend. Unpack the response
    // and return an array of events

    return [];
};

export const fetchEvent = async (id: string, slug: string): Promise<Event> => {
    // Use fetch or Axios to fetch event from backend. Unpack the response
    // and return an array instance

    return {
        id,
        slug,
        title: `Some title for event with id: ${id}`,
        description: `Some description for event with id: ${id}`,
    };
};
