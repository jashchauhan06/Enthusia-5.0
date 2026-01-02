export interface CulturalEvent {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    category: "Dance" | "Music" | "Art" | "Drama" | "Literary";
    date: string;
    time: string;
    venue: string;
    participants: string;
    prizePool?: string;
    rules: string[];
    timeline: { time: string; activity: string }[];
    requirements?: string[];
    contactName: string;
    contactPhone: string;
    contactEmail: string;
}

export const culturalEvents: CulturalEvent[] = [
    {
        slug: "nritya-sangam",
        title: "Nritya Sangam",
        description: "The ultimate dance battle featuring solo, duo, and group performances across all dance forms.",
        longDescription: "Nritya Sangam is the flagship dance competition of ENTHUSIA 5.0, celebrating the art of movement in all its forms. From classical Bharatanatyam to hip-hop, from contemporary fusion to Bollywood, showcase your talent on the grandest stage. Multiple categories ensure every dancer finds their spotlight.",
        category: "Dance",
        date: "March 15, 2026",
        time: "4:00 PM - 9:00 PM",
        venue: "Main Auditorium",
        participants: "Solo/Duo/Group",
        prizePool: "₹60,000",
        rules: [
            "Time limit: Solo - 4 min, Duo - 5 min, Group - 8 min",
            "Props allowed with prior approval",
            "Music must be submitted 24 hours before",
            "Costume changes not allowed during performance",
            "Vulgarity will lead to disqualification"
        ],
        timeline: [
            { time: "4:00 PM", activity: "Check-in & Rehearsals" },
            { time: "5:00 PM", activity: "Solo Performances" },
            { time: "6:30 PM", activity: "Duo Performances" },
            { time: "7:30 PM", activity: "Group Performances" },
            { time: "8:30 PM", activity: "Results & Prize Distribution" }
        ],
        contactName: "Ananya Sharma",
        contactPhone: "+91 98765 43220",
        contactEmail: "dance@enthusia.in"
    },
    {
        slug: "sur-sangeet",
        title: "Sur Sangeet",
        description: "Musical extravaganza featuring solo singing, band performances, and instrumental showcases.",
        longDescription: "Sur Sangeet brings together the finest musical talents under one roof. Whether you're a soulful singer, part of a band, or an instrumental virtuoso, this is your stage. From Indian classical to Western rock, from melodious ballads to high-energy performances, let your music speak.",
        category: "Music",
        date: "March 14, 2026",
        time: "5:00 PM - 10:00 PM",
        venue: "Open Air Theatre",
        participants: "Solo/Band",
        prizePool: "₹50,000",
        rules: [
            "Solo: 5 minutes, Band: 15 minutes",
            "Own instruments required (drums provided)",
            "Backing tracks allowed for solo only",
            "Sound check slot will be assigned",
            "Original compositions get bonus points"
        ],
        timeline: [
            { time: "5:00 PM", activity: "Solo Singing Round 1" },
            { time: "6:30 PM", activity: "Instrumental Performances" },
            { time: "7:30 PM", activity: "Band Performances" },
            { time: "9:00 PM", activity: "Finals & Guest Performance" },
            { time: "9:45 PM", activity: "Results" }
        ],
        requirements: [
            "Own musical instruments",
            "Music in MP3 format (for backing tracks)"
        ],
        contactName: "Rohan Kapoor",
        contactPhone: "+91 98765 43221",
        contactEmail: "music@enthusia.in"
    },
    {
        slug: "canvas-chronicles",
        title: "Canvas Chronicles",
        description: "Art competition featuring live painting, digital art, and installation art showcases.",
        longDescription: "Canvas Chronicles transforms the campus into an art gallery. Participate in live painting competitions, showcase your digital artistry, or create stunning installations. This celebration of visual arts encourages creativity without boundaries. Let your imagination run wild!",
        category: "Art",
        date: "March 14-15, 2026",
        time: "10:00 AM - 6:00 PM",
        venue: "Art Gallery",
        participants: "Individual",
        prizePool: "₹25,000",
        rules: [
            "Live painting: 3 hours, theme revealed on spot",
            "Digital art: Submit within 24 hours of theme reveal",
            "Installation: Max 6ft x 6ft x 6ft",
            "All materials must be eco-friendly",
            "Plagiarism leads to disqualification"
        ],
        timeline: [
            { time: "Day 1 - 10:00 AM", activity: "Digital Art Theme Reveal" },
            { time: "Day 1 - 2:00 PM", activity: "Installation Setup Begins" },
            { time: "Day 2 - 10:00 AM", activity: "Live Painting Competition" },
            { time: "Day 2 - 3:00 PM", activity: "Gallery Walk & Judging" },
            { time: "Day 2 - 5:00 PM", activity: "Results" }
        ],
        requirements: [
            "Own art supplies for live painting",
            "Digital tablet/laptop for digital art"
        ],
        contactName: "Kavya Nair",
        contactPhone: "+91 98765 43222",
        contactEmail: "art@enthusia.in"
    },
    {
        slug: "rangmanch",
        title: "Rangmanch",
        description: "Theatre competition featuring one-act plays, street plays, and monologue performances.",
        longDescription: "Rangmanch celebrates the dramatic arts with competitions across multiple formats. Stage a gripping one-act play, spread awareness through street theatre, or captivate with a solo monologue. The stage is set for stories that need to be told.",
        category: "Drama",
        date: "March 16, 2026",
        time: "10:00 AM - 6:00 PM",
        venue: "Drama Theatre",
        participants: "Teams/Individual",
        prizePool: "₹40,000",
        rules: [
            "One-act play: 20-30 minutes",
            "Street play: 10-15 minutes",
            "Monologue: 5-7 minutes",
            "Script must be submitted for review",
            "No politically sensitive content"
        ],
        timeline: [
            { time: "10:00 AM", activity: "Monologue Performances" },
            { time: "12:00 PM", activity: "Street Play Performances" },
            { time: "2:00 PM", activity: "Lunch Break" },
            { time: "3:00 PM", activity: "One-Act Plays" },
            { time: "5:30 PM", activity: "Results & Awards" }
        ],
        contactName: "Ishaan Verma",
        contactPhone: "+91 98765 43223",
        contactEmail: "drama@enthusia.in"
    },
    {
        slug: "wordsmith",
        title: "WordSmith",
        description: "Literary fest featuring poetry slam, creative writing, debate, and quiz competitions.",
        longDescription: "WordSmith is the literary heart of ENTHUSIA 5.0. Express yourself through poetry, weave tales in creative writing, argue your stance in debates, or test your knowledge in quizzes. For those who believe in the power of words, this is your arena.",
        category: "Literary",
        date: "March 14-15, 2026",
        time: "Various Slots",
        venue: "Seminar Hall",
        participants: "Individual/Teams",
        prizePool: "₹20,000",
        rules: [
            "Poetry: Original work, 3-5 minutes",
            "Creative Writing: 1000-1500 words, topic revealed on spot",
            "Debate: Parliamentary format",
            "Quiz: Teams of 2-3"
        ],
        timeline: [
            { time: "Day 1 - 10:00 AM", activity: "Quiz Prelims" },
            { time: "Day 1 - 2:00 PM", activity: "Creative Writing" },
            { time: "Day 1 - 5:00 PM", activity: "Poetry Slam Round 1" },
            { time: "Day 2 - 10:00 AM", activity: "Debate Prelims" },
            { time: "Day 2 - 2:00 PM", activity: "Quiz Finals" },
            { time: "Day 2 - 4:00 PM", activity: "Poetry Slam Finals" },
            { time: "Day 2 - 5:00 PM", activity: "Debate Finals & Awards" }
        ],
        contactName: "Meera Joshi",
        contactPhone: "+91 98765 43224",
        contactEmail: "literary@enthusia.in"
    },
    {
        slug: "fashion-forward",
        title: "Fashion Forward",
        description: "Fashion show competition featuring themed ramp walks and creative costume design.",
        longDescription: "Fashion Forward brings glamour to ENTHUSIA 5.0 with a spectacular fashion show competition. Design your collection around the theme 'Parallel Universe', and walk the ramp with style and confidence. Creativity in costume design, choreography, and presentation will be judged.",
        category: "Art",
        date: "March 16, 2026",
        time: "7:00 PM - 10:00 PM",
        venue: "Main Stage",
        participants: "Teams of 8-15",
        prizePool: "₹35,000",
        rules: [
            "Theme: Parallel Universe",
            "8-15 models per team",
            "12-15 minutes per team",
            "Background music must be submitted in advance",
            "No nudity or offensive content"
        ],
        timeline: [
            { time: "7:00 PM", activity: "Red Carpet & Guest Arrivals" },
            { time: "7:30 PM", activity: "Opening Act" },
            { time: "8:00 PM", activity: "Team Performances Begin" },
            { time: "9:30 PM", activity: "Guest Designer Showcase" },
            { time: "9:45 PM", activity: "Results & Crowning" }
        ],
        contactName: "Riya Malhotra",
        contactPhone: "+91 98765 43225",
        contactEmail: "fashion@enthusia.in"
    }
];

export function getCulturalEventBySlug(slug: string): CulturalEvent | undefined {
    return culturalEvents.find((event) => event.slug === slug);
}

export function getCulturalEventsByCategory(category: CulturalEvent["category"]): CulturalEvent[] {
    return culturalEvents.filter((event) => event.category === category);
}
