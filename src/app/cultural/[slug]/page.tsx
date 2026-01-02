import { notFound } from "next/navigation";
import { getCulturalEventBySlug, culturalEvents } from "@/data/cultural-events";
import { EventDetailClient } from "./EventDetailClient";

export async function generateStaticParams() {
    return culturalEvents.map((event) => ({
        slug: event.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = getCulturalEventBySlug(slug);

    if (!event) {
        return { title: "Event Not Found" };
    }

    return {
        title: `${event.title} | Cultural Fest | ENTHUSIA 5.0`,
        description: event.description,
    };
}

export default async function CulturalEventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = getCulturalEventBySlug(slug);

    if (!event) {
        notFound();
    }

    return <EventDetailClient event={event} type="cultural" />;
}
