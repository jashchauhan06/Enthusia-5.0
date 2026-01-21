// Custom icons for Room of Requirement section

export const CastleIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#blue-grad)" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <defs>
      <linearGradient id="blue-grad" x1="2" y1="2" x2="22" y2="12">
        <stop stopColor="#3b82f6"/>
        <stop offset="1" stopColor="#1e40af"/>
      </linearGradient>
    </defs>
  </svg>
);

export const TrophyIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" fill="url(#gold-grad)" stroke="currentColor" strokeWidth="1.5"/>
    <defs>
      <linearGradient id="gold-grad" x1="12" y1="2" x2="12" y2="21.5">
        <stop stopColor="#fbbf24"/>
        <stop offset="1" stopColor="#b45309"/>
      </linearGradient>
    </defs>
  </svg>
);

export const WiFiIcon = () => (
  <div className="w-6 h-6 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center">
    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
  </div>
);

export const LightningIcon = () => (
  <div className="w-6 h-6 text-yellow-400">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
    </svg>
  </div>
);

export const FoodIcon = () => (
  <div className="w-6 h-6 rounded-full bg-orange-500/30 border-2 border-orange-400 flex items-center justify-center">
    <div className="w-3 h-1 bg-orange-400 rounded-full"></div>
  </div>
);

export const RestIcon = () => (
  <div className="w-6 h-6 rounded bg-purple-500/30 border-2 border-purple-400"></div>
);

export const MoneyIcon = () => (
  <div className="w-6 h-6 rounded-full bg-amber-500/30 border-2 border-amber-400 flex items-center justify-center text-amber-400 text-xs font-bold">
    $
  </div>
);

export const MentorIcon = () => (
  <div className="w-6 h-6 rounded-full bg-green-500/30 border-2 border-green-400 flex items-center justify-center">
    <div className="w-3 h-3 rounded-full bg-green-400"></div>
  </div>
);

export const SwagIcon = () => (
  <div className="w-6 h-6 rounded bg-pink-500/30 border-2 border-pink-400 flex items-center justify-center">
    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
  </div>
);

export const CertificateIcon = () => (
  <div className="w-6 h-6 bg-slate-500/30 border-2 border-slate-400 flex items-center justify-center">
    <div className="w-4 h-3 border border-slate-400"></div>
  </div>
);
