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
        {/* 1000+ Participants */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <span className="font-heading text-[#f2f2f2] text-2xl mb-4">
            <AnimatedNumber 
              value={isInView ? 1000 : 0} 
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
        
        {/* 15+ Events */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <span className="font-heading text-[#f2f2f2] text-2xl mb-4">
            <AnimatedNumber 
              value={isInView ? 15 : 0} 
              className="font-heading text-[#f2f2f2] text-2xl"
              springOptions={{
                stiffness: 100,
                damping: 30,
                restDelta: 0.001
              }}
            />
            +
          </span>
          <span className="text-purple-500 font-body font-medium mb-1">Events</span>
          <span className="text-[#b3b3b3] font-light text-sm">Tech & Cultural</span>
        </div>
        
        {/* 3 Days */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 col-span-2 [@media(min-width:390px)]:col-span-1 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <span className="font-heading text-[#f2f2f2] text-2xl mb-4">
            <AnimatedNumber 
              value={isInView ? 3 : 0} 
              className="font-heading text-[#f2f2f2] text-2xl"
              springOptions={{
                stiffness: 100,
                damping: 30,
                restDelta: 0.001
              }}
            />
            DAYS
          </span>
          <span className="text-green-500 font-body font-medium mb-1">Non-stop</span>
          <span className="text-[#b3b3b3] font-light text-sm">Techno-cultural fest</span>
        </div>
      </div>
    </div>
  );
}
