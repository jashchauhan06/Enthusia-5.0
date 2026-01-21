import { useNavigate } from "react-router";

export function Methodology() {
  const navigate = useNavigate();

  const handleViewTechFestClick = () => {
    navigate('/techfest');
  };

  return (
    <div className="w-full h-full text-[#f2f2f2] flex flex-col">
      <h3 className="font-heading text-xl mb-2">⚙️ TechFest</h3>
      <p className="font-body text-sm text-[#b3b3b3] mb-7">
        Compete. Build. Solve. A battlefield for innovators.
      </p>

      {/* Events Grid */}
      <div className="flex flex-col gap-3 mb-4 flex-1 justify-center">
        <div className="flex items-center gap-3 p-3 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <span className="font-heading text-sm text-[#f2f2f2]">🚀</span>
          <span className="font-body text-sm text-[#b3b3b3] font-light">SITNovate 2.0 - 24hr Hackathon</span>
        </div>
        <div className="flex items-center gap-3 p-3 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <span className="font-heading text-sm text-[#f2f2f2]">💻</span>
          <span className="font-body text-sm text-[#b3b3b3] font-light">CodeSprint 2.0 - Competitive Coding</span>
        </div>
        <div className="flex items-center gap-3 p-3 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <span className="font-heading text-sm text-[#f2f2f2]">🔍</span>
          <span className="font-body text-sm text-[#b3b3b3] font-light">Stranger Tech - Tech Treasure Hunt</span>
        </div>
        <div className="flex items-center gap-3 p-3 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <span className="font-heading text-sm text-[#f2f2f2]">🪖</span>
          <span className="font-body text-sm text-[#b3b3b3] font-light">SITank 2.0 - Pitch Desk Competition</span>
        </div>
        <div className="flex items-center gap-3 p-3 border border-[#353739] rounded-2xl hover:border-[#555759] transition-colors duration-300">
          <span className="font-heading text-sm text-[#f2f2f2]">💡</span>
          <span className="font-body text-sm text-[#b3b3b3] font-light">BuildBrand - Brand Advertisement Challenge</span>
        </div>
      </div>

      {/* View TechFest Button */}
      <div className="mt-4">
        <button
          onClick={handleViewTechFestClick}
          className="w-full px-6 py-2 border border-[#353739] rounded-full font-heading text-sm text-[#f2f2f2] hover:border-[#555759] transition-colors duration-300 cursor-pointer hover:opacity-80"
        >
          Explore TechFest
        </button>
      </div>
    </div>
  );
}
