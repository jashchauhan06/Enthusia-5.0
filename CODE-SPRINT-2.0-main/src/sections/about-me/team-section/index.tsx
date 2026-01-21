import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sunidhi Haware",
    role: "President",
    image: "/images/sitnovate/Sunidhi.jpg"
  },
  {
    name: "Prathmesh Raipurkar",
    role: "Vice President",
    image: "/profile-dev.jpg"
  },
  {
    name: "Jash Chauhan",
    role: "Web Development Team",
    image: "/images/sitnovate/Jash.jpg"
  }
];

export function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <div className="bento-no-min col-span-3 row-span-3 flex flex-col items-center justify-center gap-6 p-8">
      <h3 className="font-heading text-2xl text-foreground mb-4">
        Our Team
      </h3>

      {/* Team Member Card */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-border">
          <img 
            src={currentMember.image} 
            alt={currentMember.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center">
          <h4 className="font-heading text-xl text-foreground mb-1">
            {currentMember.name}
          </h4>
          <p className="font-body text-sm text-muted-foreground">
            {currentMember.role}
          </p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={prevMember}
          className="p-2 rounded-full border border-border hover:border-[#555759] transition-colors"
          aria-label="Previous team member"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-foreground w-6' 
                  : 'bg-muted-foreground/30'
              }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextMember}
          className="p-2 rounded-full border border-border hover:border-[#555759] transition-colors"
          aria-label="Next team member"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Counter */}
      <p className="font-body text-sm text-muted-foreground">
        {currentIndex + 1} / {teamMembers.length}
      </p>
    </div>
  );
}
