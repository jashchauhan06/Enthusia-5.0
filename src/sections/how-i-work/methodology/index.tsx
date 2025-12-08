import { useNavigate } from "react-router";

export function Methodology() {
  const navigate = useNavigate();

  const handleViewScheduleClick = () => {
    navigate('/schedule');
  };

  return (
    <div className="w-full h-full text-[#f2f2f2] flex flex-col">
      <h3 className="font-heading text-xl mb-2">Event Schedule</h3>
      <p className="font-body text-sm text-[#b3b3b3] mb-7">
        24-hour innovation hackathon with key milestones
      </p>
      
      {/* Timeline Grid */}
      <div className="flex flex-col gap-3 mb-4 flex-1 justify-center">
        <div className="flex items-center gap-3 p-3 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <span className="font-heading text-lg text-[#f2f2f2]">09:00</span>
          <span className="font-body text-sm text-[#b3b3b3] font-light">Registration & Kickoff</span>
        </div>
        <div className="flex items-center gap-3 p-3 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <span className="font-heading text-lg text-[#f2f2f2]">10:00</span>
          <span className="font-body text-sm text-[#b3b3b3] font-light">Hacking Begins</span>
        </div>
        <div className="flex items-center gap-3 p-3 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <span className="font-heading text-lg text-[#f2f2f2]">18:00</span>
          <span className="font-body text-sm text-[#b3b3b3] font-light">Dinner & Networking</span>
        </div>
        <div className="flex items-center gap-3 p-3 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <span className="font-heading text-lg text-[#f2f2f2]">08:00</span>
          <span className="font-body text-sm text-[#b3b3b3] font-light">Final Presentations</span>
        </div>
      </div>
      
      {/* View Full Schedule Button */}
      <div className="mt-4">
        <button 
          onClick={handleViewScheduleClick}
          className="w-full px-6 py-2 border border-[#353739] rounded-full font-heading text-sm text-[#f2f2f2] hover:border-[#555759] transition-colors duration-300 cursor-pointer hover:opacity-80"
        >
          View Full Schedule
        </button>
      </div>
    </div>
  );
}
