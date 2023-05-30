import { useLoaderData } from "react-router";
import EventsList from "../components/EventsList/EventsList";

export default function Events() {
    const data = useLoaderData();

    const events = data.events;
    return <EventsList events={events} />;
};

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw { message: 'Could not fetch events.' };
    } else {
        return response;
    }
}