import { ResultsIcon } from "@/components/icons/focus/results-icon";
import { SecureIcon } from "@/components/icons/focus/secure-icon";
import { FastIcon } from "@/components/icons/focus/fast-icon";

export function Focus() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      {/* First Row - Single wide box with two centered columns */}
      <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-[1] grid grid-cols-2 transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
        {/* Left Column - Icon centered */}
        <div className="flex items-center justify-center mr-6">
          <ResultsIcon className="w-26 h-26" />
        </div>
        
        {/* Right Column - Text centered */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col text-left mr-7">
            <h4 className="font-heading text-[#f2f2f2] text-xl mb-2">AI & ML</h4>
            <p className="text-[#b3b3b3] font-light text-sm whitespace-nowrap">Build intelligent solutions<br />with cutting-edge AI</p>
          </div>
        </div>
      </div>
      
      {/* Second Row - Two horizontal boxes */}
      <div className="flex flex-row gap-4 flex-[2]">
        {/* Left box - Web3 */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-1 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <SecureIcon className="w-14 h-14 mb-6" />
          <h4 className="font-heading text-[#f2f2f2] text-lg mb-2">Web3</h4>
          <p className="text-[#b3b3b3] font-light text-sm">Blockchain &<br />decentralized<br />applications</p>
        </div>
        
        {/* Right box - IoT */}
        <div className="bg-black border border-[#353739] rounded-3xl p-4 flex-1 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#555759] hover:transform hover:-translate-y-1">
          <FastIcon className="w-14 h-14 mb-6" />
          <h4 className="font-heading text-[#f2f2f2] text-lg mb-2">IoT</h4>
          <p className="text-[#b3b3b3] font-light text-sm">Connected devices<br />& smart systems<br />innovation</p>
        </div>
      </div>
    </div>
  );
}
