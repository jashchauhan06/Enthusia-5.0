import { notFound } from "next/navigation";
import { getEventBySlug, techfestEvents } from "@/data/techfest-events";
import { EventDetailClient } from "./EventDetailClient";

export async function generateStaticParams() {
    return techfestEvents.map((event) => ({
        slug: event.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = getEventBySlug(slug);

    if (!event) {
        return { title: "Event Not Found" };
    }

    return {
        title: `${event.title} | TechFest | ENTHUSIA 5.0`,
        description: event.description,
    };
}

export default async function TechFestEventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = getEventBySlug(slug);

    if (!event) {
        notFound();
    }

    return <EventDetailClient event={event} type="techfest" />;
}
