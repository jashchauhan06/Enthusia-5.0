export interface TechFestEvent {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    category: "Hackathon" | "Workshop" | "Competition" | "Gaming";
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

export const techfestEvents: TechFestEvent[] = [
    {
        slug: "code-horizon",
        title: "Code Horizon",
        description: "24-hour hackathon challenging you to build innovative solutions for real-world problems using cutting-edge technologies.",
        longDescription: "Code Horizon is the flagship 24-hour hackathon of ENTHUSIA 5.0, bringing together the brightest minds to solve real-world challenges. Teams will compete to build innovative solutions using AI, blockchain, IoT, and other cutting-edge technologies. With mentors from top tech companies and substantial prizes, this is your chance to showcase your skills and make an impact.",
        category: "Hackathon",
        date: "March 15, 2026",
        time: "9:00 AM - 9:00 AM (Next Day)",
        venue: "Main Auditorium",
        participants: "Teams of 2-4",
        prizePool: "₹1,00,000",
        rules: [
            "Teams must consist of 2-4 members",
            "All code must be written during the hackathon",
            "Use of open-source libraries is allowed",
            "Projects must be submitted before the deadline",
            "Teams must present their solution to the judges"
        ],
        timeline: [
            { time: "9:00 AM", activity: "Registration & Team Check-in" },
            { time: "10:00 AM", activity: "Opening Ceremony & Problem Statements" },
            { time: "11:00 AM", activity: "Hacking Begins" },
            { time: "1:00 PM", activity: "Lunch Break" },
            { time: "8:00 PM", activity: "Dinner Break" },
            { time: "9:00 AM (Day 2)", activity: "Submissions Close" },
            { time: "10:00 AM", activity: "Presentations & Judging" },
            { time: "12:00 PM", activity: "Results & Prize Distribution" }
        ],
        requirements: [
            "Laptop with required development tools",
            "Valid college ID",
            "GitHub account"
        ],
        contactName: "Rahul Sharma",
        contactPhone: "+91 98765 43210",
        contactEmail: "hackathon@enthusia.in"
    },
    {
        slug: "ai-workshop",
        title: "AI & Machine Learning Workshop",
        description: "Hands-on workshop covering the fundamentals of AI/ML with practical projects using Python and TensorFlow.",
        longDescription: "Dive into the world of Artificial Intelligence and Machine Learning in this comprehensive workshop. Learn from industry experts as they guide you through neural networks, deep learning, and practical applications. Build your own ML models and understand how AI is transforming industries.",
        category: "Workshop",
        date: "March 14, 2026",
        time: "10:00 AM - 4:00 PM",
        venue: "Computer Lab 1",
        participants: "Individual",
        rules: [
            "Participants must have basic Python knowledge",
            "Bring your own laptop",
            "Pre-registration required",
            "Limited to 50 participants"
        ],
        timeline: [
            { time: "10:00 AM", activity: "Introduction to AI/ML" },
            { time: "11:30 AM", activity: "Hands-on: Setting Up Environment" },
            { time: "1:00 PM", activity: "Lunch Break" },
            { time: "2:00 PM", activity: "Building Your First Model" },
            { time: "3:30 PM", activity: "Advanced Concepts & Q&A" }
        ],
        requirements: [
            "Laptop with Python 3.8+ installed",
            "Basic understanding of programming"
        ],
        contactName: "Priya Patel",
        contactPhone: "+91 98765 43211",
        contactEmail: "workshops@enthusia.in"
    },
    {
        slug: "robo-wars",
        title: "RoboWars",
        description: "Build battle-ready robots and compete in an arena showdown. Last robot standing wins!",
        longDescription: "RoboWars brings the thrill of robot combat to ENTHUSIA 5.0! Design and build your battle robot to compete in an elimination-style tournament. Strategy, engineering skills, and quick thinking will determine the ultimate champion. Witness the clash of metal and motors in this adrenaline-pumping competition.",
        category: "Competition",
        date: "March 16, 2026",
        time: "11:00 AM - 5:00 PM",
        venue: "Open Arena",
        participants: "Teams of 2-5",
        prizePool: "₹50,000",
        rules: [
            "Robot weight must not exceed 15kg",
            "No flame-based weapons allowed",
            "Wireless control mandatory",
            "Battery voltage limit: 24V",
            "Match duration: 3 minutes"
        ],
        timeline: [
            { time: "11:00 AM", activity: "Registration & Robot Inspection" },
            { time: "12:00 PM", activity: "Opening & Rules Briefing" },
            { time: "1:00 PM", activity: "Qualifying Rounds" },
            { time: "3:00 PM", activity: "Semi-Finals" },
            { time: "4:00 PM", activity: "Finals" },
            { time: "5:00 PM", activity: "Prize Distribution" }
        ],
        requirements: [
            "Battle-ready robot meeting specifications",
            "Spare parts and tools",
            "Safety gear"
        ],
        contactName: "Vikram Singh",
        contactPhone: "+91 98765 43212",
        contactEmail: "robowars@enthusia.in"
    },
    {
        slug: "cyber-quest",
        title: "CyberQuest CTF",
        description: "Capture The Flag cybersecurity competition testing your hacking and defense skills.",
        longDescription: "CyberQuest is an intense Capture The Flag competition designed for cybersecurity enthusiasts. Navigate through challenges in web exploitation, cryptography, reverse engineering, and forensics. Test your skills against the best and prove your prowess in the digital battlefield.",
        category: "Competition",
        date: "March 15, 2026",
        time: "2:00 PM - 8:00 PM",
        venue: "Cyber Lab",
        participants: "Teams of 1-3",
        prizePool: "₹30,000",
        rules: [
            "No attacking competition infrastructure",
            "No sharing flags between teams",
            "All tools and techniques are fair game",
            "Internet access provided",
            "Teams must use designated systems"
        ],
        timeline: [
            { time: "2:00 PM", activity: "Registration & Setup" },
            { time: "2:30 PM", activity: "Rules & Platform Introduction" },
            { time: "3:00 PM", activity: "CTF Begins" },
            { time: "7:00 PM", activity: "CTF Ends" },
            { time: "7:30 PM", activity: "Results & Writeups" }
        ],
        contactName: "Aditya Kumar",
        contactPhone: "+91 98765 43213",
        contactEmail: "ctf@enthusia.in"
    },
    {
        slug: "gaming-arena",
        title: "Gaming Arena",
        description: "Compete in popular esports titles including Valorant, BGMI, and FIFA in our gaming tournament.",
        longDescription: "The Gaming Arena brings competitive esports to ENTHUSIA 5.0! Compete in your favorite titles - Valorant for tactical shooter fans, BGMI for battle royale enthusiasts, and FIFA for football gaming pros. Multiple tournaments, massive prizes, and the glory of being crowned the champion await!",
        category: "Gaming",
        date: "March 14-16, 2026",
        time: "Various Slots",
        venue: "Gaming Zone",
        participants: "Individual/Teams",
        prizePool: "₹75,000",
        rules: [
            "Own gaming peripherals recommended",
            "Game-specific rules apply",
            "No use of hacks or cheats",
            "Sportsmanship mandatory",
            "Tournament format varies by game"
        ],
        timeline: [
            { time: "Day 1", activity: "FIFA Tournament" },
            { time: "Day 2", activity: "BGMI Qualifiers & Finals" },
            { time: "Day 3", activity: "Valorant Tournament" }
        ],
        contactName: "Arjun Mehta",
        contactPhone: "+91 98765 43214",
        contactEmail: "gaming@enthusia.in"
    },
    {
        slug: "web-dev-bootcamp",
        title: "Full-Stack Web Development Bootcamp",
        description: "Intensive 2-day bootcamp covering React, Node.js, and modern web development practices.",
        longDescription: "Transform from a beginner to a competent full-stack developer in this intensive 2-day bootcamp. Learn React for frontend, Node.js for backend, and deploy your first full-stack application. Industry mentors will guide you through real-world project development and best practices.",
        category: "Workshop",
        date: "March 13-14, 2026",
        time: "9:00 AM - 5:00 PM",
        venue: "Computer Lab 2",
        participants: "Individual",
        rules: [
            "Basic HTML/CSS knowledge required",
            "Bring your own laptop",
            "Pre-registration mandatory",
            "Limited to 40 participants"
        ],
        timeline: [
            { time: "Day 1 - 9:00 AM", activity: "React Fundamentals" },
            { time: "Day 1 - 2:00 PM", activity: "Building React Components" },
            { time: "Day 2 - 9:00 AM", activity: "Node.js & Express" },
            { time: "Day 2 - 2:00 PM", activity: "Full-Stack Integration & Deployment" }
        ],
        requirements: [
            "Laptop with Node.js installed",
            "VS Code or preferred IDE",
            "GitHub account"
        ],
        contactName: "Sneha Reddy",
        contactPhone: "+91 98765 43215",
        contactEmail: "workshops@enthusia.in"
    }
];

export function getEventBySlug(slug: string): TechFestEvent | undefined {
    return techfestEvents.find((event) => event.slug === slug);
}

export function getEventsByCategory(category: TechFestEvent["category"]): TechFestEvent[] {
    return techfestEvents.filter((event) => event.category === category);
}
