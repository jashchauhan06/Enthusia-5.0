import { useNavigate } from "react-router";

export function Focus() {
  const navigate = useNavigate();

  const handleViewCulturalFestClick = () => {
    navigate('/cultural-fest');
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="font-heading text-xl text-[#f2f2f2] mb-2">🎭 Cultural Fest</h3>
        <p className="font-body text-sm text-[#b3b3b3]">
          Express. Perform. Celebrate. When the sun sets, the fest transforms.
        </p>
      </div>

      {/* First Row - Single wide box with performance highlights */}
      <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-[1] flex items-center justify-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
        <div className="text-center">
          <div className="text-2xl mb-2">🎪</div>
          <h4 className="font-heading text-[#f2f2f2] text-lg mb-2">Cultural Performances</h4>
          <p className="text-[#b3b3b3] font-light text-sm">Dance • Drama • Ramp Walk • Felicitation</p>
        </div>
      </div>
      
      {/* Second Row - Two horizontal boxes */}
      <div className="flex flex-row gap-4 flex-[2]">
        {/* Left box - Night Events */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-1 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <div className="text-3xl mb-3">🌙</div>
          <h4 className="font-heading text-[#f2f2f2] text-lg mb-2">Night Events</h4>
          <p className="text-[#b3b3b3] font-light text-sm">Jamming Night<br />Stand-Up Comedy<br />DJ Night</p>
        </div>
        
        {/* Right box - Celebrity Night */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-1 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <div className="text-3xl mb-3">⭐</div>
          <h4 className="font-heading text-[#f2f2f2] text-lg mb-2">Celebrity Night</h4>
          <p className="text-[#b3b3b3] font-light text-sm">Special Artist<br />Performance<br />(To be revealed)</p>
        </div>
      </div>

      {/* View Cultural Fest Button */}
      <div className="mt-4">
        <button 
          onClick={handleViewCulturalFestClick}
          className="w-full px-6 py-2 border border-[#353739] rounded-full font-heading text-sm text-[#f2f2f2] hover:border-[#555759] transition-colors duration-300 cursor-pointer hover:opacity-80"
        >
          Explore Cultural Fest
        </button>
      </div>
    </div>
  );
}
