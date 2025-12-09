import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/seo/SEO";

export function SchedulePage() {
  const navigate = useNavigate();
  const scheduleData = [
    {
      day: "Day 1",
      date: "January 15, 2025",
      events: [
        { time: "09:00 AM", title: "Registration & Check-in", description: "Collect your badges and swag" },
        { time: "10:00 AM", title: "Opening Ceremony", description: "Welcome address and hackathon kickoff" },
        { time: "10:30 AM", title: "Team Formation", description: "Find your teammates and finalize teams" },
        { time: "11:00 AM", title: "Hacking Begins!", description: "Start building your projects" },
        { time: "01:00 PM", title: "Lunch Break", description: "Fuel up for the hackathon ahead" },
        { time: "03:00 PM", title: "Mentor Session 1", description: "Get guidance from industry experts" },
        { time: "06:00 PM", title: "Dinner & Networking", description: "Connect with other teams and mentors" },
        { time: "08:00 PM", title: "Workshop: AI/ML Basics", description: "Learn cutting-edge technologies" },
        { time: "10:00 PM", title: "Late Night Snacks", description: "Keep the energy going" },
      ]
    },
    {
      day: "Day 2",
      date: "January 16, 2025",
      events: [
        { time: "12:00 AM", title: "Midnight Checkpoint", description: "Progress review and support" },
        { time: "02:00 AM", title: "Energy Boost", description: "Coffee and snacks available" },
        { time: "06:00 AM", title: "Breakfast", description: "Morning fuel for final push" },
        { time: "08:00 AM", title: "Submission Deadline", description: "Final code and presentation submission" },
        { time: "09:00 AM", title: "Project Presentations", description: "Showcase your innovations" },
        { time: "11:00 AM", title: "Judging & Deliberation", description: "Judges evaluate all projects" },
        { time: "12:00 PM", title: "Closing Ceremony", description: "Winner announcements and prizes" },
        { time: "01:00 PM", title: "Networking Lunch", description: "Celebrate and connect" },
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Event Schedule - SITNovate 24-Hour Hackathon"
        description="Complete schedule for the SITNovate 24-Hour Hackathon including all events, workshops, and activities."
        url="https://sitnovate.vercel.app/schedule"
      />
      
      <div className="min-h-screen bg-background px-4 py-12">
        <div className="w-full max-w-5xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#b3b3b3] hover:text-foreground transition-colors mb-6 font-body"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl mb-4 text-foreground">
              EVENT SCHEDULE
            </h1>
            <p className="font-body text-[#b3b3b3] text-lg">
              Complete timeline for the 24-hour innovation hackathon
            </p>
          </div>

          {/* Schedule Timeline */}
          <div className="space-y-12">
            {scheduleData.map((day, dayIndex) => (
              <div key={dayIndex} className="space-y-6">
                {/* Day Header */}
                <div className="sticky top-0 bg-background/95 backdrop-blur-sm py-4 z-10 border-b border-border">
                  <h2 className="font-heading text-2xl md:text-3xl text-foreground">
                    {day.day}
                  </h2>
                  <p className="font-body text-[#b3b3b3] text-sm mt-1">
                    {day.date}
                  </p>
                </div>

                {/* Events */}
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex}
                      className="flex gap-6 p-6 bg-card border border-border rounded-2xl hover:border-[#555759] transition-all duration-300 hover:transform hover:-translate-y-1"
                    >
                      {/* Time */}
                      <div className="flex-shrink-0 w-24">
                        <span className="font-heading text-lg text-foreground">
                          {event.time}
                        </span>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <h3 className="font-heading text-xl text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="font-body text-[#b3b3b3] text-sm">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-12 p-6 bg-card border border-border rounded-2xl">
            <h3 className="font-heading text-xl text-foreground mb-4">
              Important Notes
            </h3>
            <ul className="space-y-2 font-body text-[#b3b3b3] text-sm">
              <li>• All times are in Indian Standard Time (IST)</li>
              <li>• Schedule is subject to minor changes</li>
              <li>• Mentors will be available throughout the event</li>
              <li>• Food and beverages will be provided at scheduled times</li>
              <li>• Sleeping areas will be available for rest</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
