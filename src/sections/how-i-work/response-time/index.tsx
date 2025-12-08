import { AnimatedNumber } from "@/components/ui/animated-number";
import { useInView } from "@/hooks/useInView";

export function ResponseTime() {
  const { ref, isInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="w-full h-full flex flex-col gap-4">
      
      <div className="grid grid-cols-2 [@media(min-width:390px)]:grid-cols-3 gap-3 flex-1 min-h-[200px]">
        {/* 500+ Participants */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <span className="font-heading text-[#f2f2f2] text-2xl mb-4">
            <AnimatedNumber 
              value={isInView ? 500 : 0} 
              className="font-heading text-[#f2f2f2] text-2xl"
              springOptions={{
                stiffness: 100,
                damping: 30,
                restDelta: 0.001
              }}
            />
            +
          </span>
          <span className="text-blue-500 font-body font-medium mb-1">Participants</span>
          <span className="text-[#b3b3b3] font-light text-sm">Expected turnout</span>
        </div>
        
        {/* 50+ Teams */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <span className="font-heading text-[#f2f2f2] text-2xl mb-4">
            <AnimatedNumber 
              value={isInView ? 50 : 0} 
              className="font-heading text-[#f2f2f2] text-2xl"
              springOptions={{
                stiffness: 100,
                damping: 30,
                restDelta: 0.001
              }}
            />
            +
          </span>
          <span className="text-purple-500 font-body font-medium mb-1">Teams</span>
          <span className="text-[#b3b3b3] font-light text-sm">Competing together</span>
        </div>
        
        {/* 24 Hours */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 col-span-2 [@media(min-width:390px)]:col-span-1 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <span className="font-heading text-[#f2f2f2] text-2xl mb-4">
            <AnimatedNumber 
              value={isInView ? 24 : 0} 
              className="font-heading text-[#f2f2f2] text-2xl"
              springOptions={{
                stiffness: 100,
                damping: 30,
                restDelta: 0.001
              }}
            />
            HRS
          </span>
          <span className="text-green-500 font-body font-medium mb-1">Non-stop</span>
          <span className="text-[#b3b3b3] font-light text-sm">Innovation hackathon</span>
        </div>
      </div>
    </div>
  );
}
