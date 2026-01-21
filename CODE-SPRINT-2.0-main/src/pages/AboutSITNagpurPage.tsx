
import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

// Modern Icon Components with color variants
const AcademicIcon = ({ className = "text-cyan-400" }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const VisionIcon = ({ className = "text-purple-400" }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const InfraIcon = ({ className = "text-green-400" }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);

const GlobeIcon = ({ className = "text-blue-400" }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const BookIcon = ({ className = "text-cyan-400" }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const UsersIcon = ({ className = "text-purple-400" }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const StarIcon = ({ className = "text-yellow-400" }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
  </svg>
);


const BrainCircuitIcon = ({ className }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 2.21 2.5 2.5 0 0 0 .29 2.09 2.5 2.5 0 0 0 1.32 2.21 2.5 2.5 0 0 0 1.98 3 2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 4.96.46 2.5 2.5 0 0 0 1.98-3 2.5 2.5 0 0 0 1.32-2.21 2.5 2.5 0 0 0-.29-2.09 2.5 2.5 0 0 0-1.32-2.21 2.5 2.5 0 0 0-1.98-3 2.5 2.5 0 0 0-4.96.46Z" />
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M6 9l3 3" />
    <path d="M18 9l-3 3" />
    <path d="M6 15l3-3" />
    <path d="M18 15l-3-3" />
  </svg>
);

// 2. Cyber Security: A shield with a digital lock pattern
const SecurityIcon = ({ className }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M8 11h8" />
    <path d="M12 11v4" />
    <path d="M9 15h6" />
  </svg>
);

// 3. AIoT: A microchip emitting wireless signals
const IotIcon = ({ className }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M7 4V2" />
    <path d="M17 4V2" />
    <path d="M7 20v2" />
    <path d="M17 20v2" />
  </svg>
);

// 4. Data Science: A graphical analysis/node structure
const DataIcon = ({ className }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    <path d="M18.7 8h-5v5" />
    <circle cx="7" cy="14" r="2" />
    <circle cx="19" cy="8" r="2" />
  </svg>
);

// 5. Cloud Computing: A cloud integrated with server circuitry
const CloudIcon = ({ className }: { className?: string }) => (
  <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19" />
    <path d="M19 13.5a5.5 5.5 0 0 1 1.5 10.5H3.5a5.5 5.5 0 0 1 0-11 4.5 4.5 0 0 1 1.1-8.8 7 7 0 0 1 13.2 2.6" />
  </svg>
);

function AboutSITNagpur() {
  return (
    <section className="relative w-full min-h-screen bg-black py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">

        {/* Hero Video Section */}
        <div className="pt-16 text-center mb-16">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-tight">
            About<br />SIT Nagpur
          </h1>
          <div className="relative group">
            <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 rounded-2xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[550px] object-cover"
              >
                <source src="SITNAGPUR.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Stats Cards - Colorful Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl font-bold text-cyan-400 mb-2">2021</div>
            <p className="font-body text-sm text-zinc-400 uppercase tracking-wider">Established</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl font-bold text-green-400 mb-2">75</div>
            <p className="font-body text-sm text-zinc-400 uppercase tracking-wider">Acres Campus</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl font-bold text-purple-400 mb-2">5</div>
            <p className="font-body text-sm text-zinc-400 uppercase tracking-wider">B.Tech Programs</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl font-bold text-orange-400 mb-2">SIU</div>
            <p className="font-body text-sm text-zinc-400 uppercase tracking-wider">Pune Affiliated</p>
          </div>
        </div>

        {/* Main Content - Colorful Asymmetric Layout */}
        <div className="space-y-10 mb-24">

          {/* Row 1: Large Introduction + Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20 shadow-2xl shadow-cyan-500/5 hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <InfraIcon className="text-cyan-400" />
                </div>
                <h3 className="font-heading text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">About the Institute</h3>
              </div>
              <div className="space-y-5">
                <p className="font-body text-base text-zinc-300 leading-relaxed">
                  Symbiosis Institute of Technology (SIT) Nagpur is one of the best engineering colleges in Nagpur established in <span className="text-cyan-400 font-semibold">2021</span>, inheriting splendid novelty, dynamism, and excellence in education. It is nurtured by the visionary ideas of <span className="text-purple-400 font-semibold">Dr. S.B. Mujumdar</span>, Chancellor of Symbiosis International University, on the principles of vedic thought <span className="text-orange-400 font-semibold">'Vasudhaiva Kutumbakam'</span> which means <span className="text-green-400 font-semibold">'World as One Family.'</span>
                </p>
                <p className="font-body text-base text-zinc-300 leading-relaxed">
                  Symbiosis Institute of Technology, Nagpur is a member of <span className="text-cyan-400 font-semibold">Symbiosis International University, Pune</span>, and is ideally positioned in Maharashtra's prospective education center—Nagpur, providing a plethora of possibilities for aspiring engineers.
                </p>
                <p className="font-body text-base text-zinc-300 leading-relaxed">
                  Nagpur is one of the best places in central India for technical engineering education, topping <span className="text-purple-400 font-semibold">liveability, biodiversity, public transportation, and health care indexes</span>.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/30 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6">
                <GlobeIcon className="text-purple-400" />
              </div>
              <h3 className="font-heading text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">Philosophy</h3>
              <p className="font-body text-base text-zinc-300 leading-relaxed">
                Guided by <span className="text-purple-400 font-semibold">Vasudhaiva Kutumbakam</span> — "The World is One Family"
              </p>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-6"></div>
              <p className="font-body text-sm text-zinc-400">
                Creating engineers who are technically skilled, socially responsible, and globally aware.
              </p>
            </div>
          </div>

          {/* Row 2: Academic Programs Section */}
          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm rounded-3xl p-12 border border-orange-500/20 shadow-2xl shadow-orange-500/5 hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <AcademicIcon className="text-orange-400" />
              </div>
              <h3 className="font-heading text-3xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Academic Excellence</h3>
            </div>
            <p className="font-body text-base text-zinc-300 leading-relaxed mb-8 max-w-4xl">
              SIT Nagpur currently offers <span className="text-orange-400 font-semibold">B.Tech Specialization</span> in emerging and high-demand domains. Being among the league of the best engineering colleges in Nagpur, SIT strives to deliver high-quality technical education that meets the needs of today's competitive industry while utilizing <span className="text-cyan-400 font-semibold">cutting-edge technologies</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                {
                  name: "Artificial Intelligence & Machine Learning",
                  short: "AI & ML",
                  colorClass: "text-cyan-400",
                  bgClass: "bg-cyan-400",
                  Icon: BrainCircuitIcon
                },
                {
                  name: "Cyber Security",
                  short: "Cyber Security",
                  colorClass: "text-red-400",
                  bgClass: "bg-red-400",
                  Icon: SecurityIcon
                },
                {
                  name: "Artificial Intelligence of Things",
                  short: "AIoT",
                  colorClass: "text-purple-400",
                  bgClass: "bg-purple-400",
                  Icon: IotIcon
                },
                {
                  name: "Data Science & Analytics",
                  short: "Data Science",
                  colorClass: "text-green-400",
                  bgClass: "bg-green-400",
                  Icon: DataIcon
                },
                {
                  name: "Cloud Computing",
                  short: "Cloud Computing",
                  colorClass: "text-blue-400",
                  bgClass: "bg-blue-400",
                  Icon: CloudIcon
                }
              ].map((program, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/30 shadow-xl hover:shadow-2xl hover:border-zinc-600/50 transition-all duration-500 hover:-translate-y-2 group"
                >
                  {/* Icon Container with dynamic glow effect based on domain color */}
                  <div className={`w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>

                    {/* Subtle background glow behind the icon */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${program.bgClass}`}></div>

                    {/* Render the specific icon component */}
                    <program.Icon className={`w-6 h-6 ${program.colorClass} transition-all duration-300`} />

                  </div>

                  <p className={`font-body text-sm font-semibold mb-2 ${program.colorClass} tracking-wide`}>
                    {program.short}
                  </p>
                  <p className="font-body text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-200 transition-colors">
                    {program.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Infrastructure & Excellence */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 backdrop-blur-sm rounded-3xl p-10 border border-green-500/30 shadow-2xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                <InfraIcon className="text-green-400" />
              </div>
              <h3 className="font-heading text-2xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">State-of-the-Art Infrastructure</h3>
              <p className="font-body text-base text-zinc-300 leading-relaxed mb-6">
                SIT Nagpur has emerged as one of the best B.Tech colleges in Nagpur with <span className="text-green-400 font-semibold">state-of-the-art infrastructure</span> and outstanding amenities for its students. Its pollution-free campus features plenty of open space as well as a diverse range of academic, sporting, and cultural amenities.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <p className="font-body text-sm text-zinc-400">Advanced laboratories & innovation spaces</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                  <p className="font-body text-sm text-zinc-400">Modern auditoriums & seminar halls</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p className="font-body text-sm text-zinc-400">World-class sporting facilities</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                  <p className="font-body text-sm text-zinc-400">Residential amenities on campus</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                  <p className="font-body text-sm text-zinc-400">Pollution-free green environment</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                  <p className="font-body text-sm text-zinc-400">Architecturally unique campus design</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 backdrop-blur-sm rounded-3xl p-10 border border-orange-500/30 shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6">
                <InnovationIcon className="text-orange-400" />
              </div>
              <h3 className="font-heading text-2xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">Holistic Development</h3>
              <p className="font-body text-base text-zinc-300 leading-relaxed mb-6">
                Through systematic and effective planning and supervision of the teaching-learning process, both inside and outside the classroom, the Institute creates an atmosphere favorable to maximizing the potential of both teachers and students.
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl p-4 border border-cyan-500/20">
                  <p className="font-body text-sm text-cyan-400 font-medium mb-1">Techfests & Cultural Programs</p>
                  <p className="font-body text-xs text-zinc-500">Student-driven technical and cultural events</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl p-4 border border-purple-500/20">
                  <p className="font-body text-sm text-purple-400 font-medium mb-1">Industry-Institute Meetings</p>
                  <p className="font-body text-xs text-zinc-500">Regular interactions with industry leaders</p>
                </div>
                <div className="bg-gradient-to-r from-orange-500/5 to-transparent rounded-xl p-4 border border-orange-500/20">
                  <p className="font-body text-sm text-orange-400 font-medium mb-1">Guest Lectures</p>
                  <p className="font-body text-xs text-zinc-500">Sessions by recognized individuals</p>
                </div>
                <div className="bg-gradient-to-r from-green-500/5 to-transparent rounded-xl p-4 border border-green-500/20">
                  <p className="font-body text-sm text-green-400 font-medium mb-1">International Exchange</p>
                  <p className="font-body text-xs text-zinc-500">Student exchange programs globally</p>
                </div>
                <div className="bg-gradient-to-r from-pink-500/5 to-transparent rounded-xl p-4 border border-pink-500/20">
                  <p className="font-body text-sm text-pink-400 font-medium mb-1">Liberal Arts Education</p>
                  <p className="font-body text-xs text-zinc-500">Performing arts, ethics, and human values</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl p-4 border border-blue-500/20">
                  <p className="font-body text-sm text-blue-400 font-medium mb-1">Management Diploma</p>
                  <p className="font-body text-xs text-zinc-500">Special programs from Symbiosis Institutes</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Row 4: Faculty & Global Engineers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 backdrop-blur-sm rounded-3xl p-10 border border-blue-500/30 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <UsersIcon className="text-blue-400" />
                </div>
                <h3 className="font-heading text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experienced Faculty</h3>
              </div>
              <p className="font-body text-base text-zinc-300 leading-relaxed mb-6">
                Recognizing the importance of faculty, particular efforts have been made to employ <span className="text-blue-400 font-semibold">highly qualified and competent professors</span> who bring both academic excellence and industry experience.
              </p>
              <p className="font-body text-base text-zinc-300 leading-relaxed">
                Our faculty members are dedicated to nurturing the next generation of engineers through innovative teaching methodologies and personalized mentorship.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/5 backdrop-blur-sm rounded-3xl p-10 border border-pink-500/30 shadow-2xl shadow-pink-500/10 hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                  <StarIcon className="text-pink-400" />
                </div>
                <h3 className="font-heading text-2xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Creating Global Engineers</h3>
              </div>
              <p className="font-body text-base text-zinc-300 leading-relaxed mb-6">
                To realize the dream of <span className="text-pink-400 font-semibold">Prof. Dr. S. B. Mujumdar Sir</span>, Chancellor of SIU and founder of Symbiosis, of creating <span className="text-purple-400 font-semibold">Global Engineers</span>, students are trained in liberal arts, performing arts, industrial history, human values and ethics.
              </p>
              <p className="font-body text-base text-zinc-300 leading-relaxed">
                The Institute encourages students to complement their regular education by completing technological projects, competing in competitions, and organizing events.
              </p>
            </div>
          </div>

          {/* Row 5: Curriculum Excellence */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <BookIcon className="text-cyan-400" />
              </div>
              <h3 className="font-heading text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Curriculum Excellence</h3>
            </div>
            <p className="font-body text-base text-zinc-300 leading-relaxed max-w-5xl">
              The Institute's curriculum emphasizes <span className="text-cyan-400 font-semibold">fundamentals and current advancements</span> in Computer Science Engineering. Students benefit from a balanced approach that combines theoretical knowledge with practical application, preparing them for the dynamic challenges of the technology industry.
            </p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="mb-24">
          <h2 className="font-body text-sm font-light text-purple-400 uppercase tracking-[0.3em] text-center mb-16">
            Vision & Mission
          </h2>

          {/* Vision Card */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500 mb-10">
            <div className="flex items-start gap-5 mb-8">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                <VisionIcon className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-heading text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Institute Vision</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>
            <p className="font-body text-lg text-zinc-200 leading-relaxed max-w-5xl">
              To be a <span className="text-purple-400 font-semibold">global leader</span> in the field of Engineering by imparting <span className="text-pink-400 font-semibold">academic excellence</span> through holistic learning, industry partnerships, research, innovation, and entrepreneurship for societal development.
            </p>
          </div>

          {/* Mission Cards - Staggered Colorful Masonry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                code: "M1",
                title: "Innovative Learning Excellence",
                desc: "To achieve academic excellence by imparting holistic learning through innovative teaching pedagogy by engaging students in project-based learning, hackathons, internships, and preparing students to excel globally.",
                color: "cyan"
              },
              {
                code: "M2",
                title: "Industry-Academia Integration",
                desc: "To be a leading institution that bridges academia and industry through strategic partnerships, offering industry-aligned learning modules that equip students with practical skills and expertise in the ever-evolving field of Computer Science and Engineering.",
                color: "orange"
              },
              {
                code: "M3",
                title: "Research and Innovation Excellence",
                desc: "To foster a vibrant environment of multidisciplinary research and innovation that adheres to high-quality publications, intellectual property rights, and product development while empowering students and faculty to lead with integrity, ethics, and creativity.",
                color: "green"
              },
              {
                code: "M4",
                title: "Entrepreneurial Leadership Development",
                desc: "To inspire and equip students with an entrepreneurial mind-set, cultivating leaders to create sustainable solutions that positively impact communities and the world at large.",
                color: "purple"
              }
            ].map((mission, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${mission.color === 'cyan' ? 'from-cyan-500/10 to-cyan-500/5 border-cyan-500/30 shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:border-cyan-500/50' :
                  mission.color === 'orange' ? 'from-orange-500/10 to-orange-500/5 border-orange-500/30 shadow-orange-500/10 hover:shadow-orange-500/20 hover:border-orange-500/50' :
                    mission.color === 'green' ? 'from-green-500/10 to-green-500/5 border-green-500/30 shadow-green-500/10 hover:shadow-green-500/20 hover:border-green-500/50' :
                      'from-purple-500/10 to-purple-500/5 border-purple-500/30 shadow-purple-500/10 hover:shadow-purple-500/20 hover:border-purple-500/50'
                  } backdrop-blur-sm rounded-3xl p-9 border shadow-2xl transition-all duration-500 hover:-translate-y-2 ${index === 1 || index === 2 ? 'md:mt-10' : ''
                  }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-10 h-10 rounded-lg ${mission.color === 'cyan' ? 'bg-cyan-500/20 border-cyan-500/40' :
                    mission.color === 'orange' ? 'bg-orange-500/20 border-orange-500/40' :
                      mission.color === 'green' ? 'bg-green-500/20 border-green-500/40' :
                        'bg-purple-500/20 border-purple-500/40'
                    } border flex items-center justify-center`}>
                    <span className={`font-body text-xs font-bold ${mission.color === 'cyan' ? 'text-cyan-400' :
                      mission.color === 'orange' ? 'text-orange-400' :
                        mission.color === 'green' ? 'text-green-400' :
                          'text-purple-400'
                      }`}>{mission.code}</span>
                  </div>
                  <div className={`w-10 h-1 rounded-full ${mission.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                    mission.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                      mission.color === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`}></div>
                </div>
                <h4 className={`font-heading text-xl mb-4 ${mission.color === 'cyan' ? 'bg-gradient-to-r from-cyan-400 to-blue-400' :
                  mission.color === 'orange' ? 'bg-gradient-to-r from-orange-400 to-red-400' :
                    mission.color === 'green' ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                      'bg-gradient-to-r from-purple-400 to-pink-400'
                  } bg-clip-text text-transparent`}>{mission.title}</h4>
                <p className="font-body text-sm text-zinc-400 leading-relaxed">
                  {mission.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission & CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/5 backdrop-blur-sm rounded-3xl p-10 border border-blue-500/30 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500">
            <h3 className="font-heading text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">Admissions</h3>
            <p className="font-body text-base text-zinc-300 leading-relaxed mb-4">
              SIT Nagpur offers admission to their <span className="text-cyan-400 font-semibold">B.Tech Computer Science Engineering</span> course on the basis of the <span className="text-cyan-400 font-semibold">JEE / Any state entrance exam</span>.
            </p>
            <p className="font-body text-base text-zinc-300 leading-relaxed">
              The institute takes pride in the expertise of delivering first-class engineering education to the students and consistently improving as the best B.Tech college in Nagpur.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm rounded-3xl p-10 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500 flex flex-col justify-center items-center text-center">
            <h3 className="font-heading text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">Learn More</h3>
            <p className="font-body text-base text-zinc-400 mb-8">
              Explore our programs, campus life, and admission process
            </p>
            <a
              href="https://sitnagpur.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 px-8 py-4 rounded-full border border-cyan-500/40 hover:border-cyan-500/60 transition-all duration-300 group shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
            >
              <span>Visit Official Website</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

function AboutSITNagpurMobile() {
  return (
    <section className="relative w-full min-h-screen bg-black py-16 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Hero Video Section */}
        <div className="mb-20">
          <h2 className="font-body text-xs font-light text-cyan-400 uppercase tracking-[0.3em] text-center mb-8">
            About SIT Nagpur
          </h2>
          <div className="relative group">
            <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 rounded-xl opacity-20 blur-sm"></div>
            <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/30 shadow-xl shadow-cyan-500/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[300px] object-cover"
              >
                <source src="SITNAGPUR.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-16">
          <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm rounded-2xl p-5 border border-cyan-500/30 shadow-xl shadow-cyan-500/10 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-1">2021</div>
            <p className="font-body text-xs text-zinc-400 uppercase tracking-wider">Established</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-sm rounded-2xl p-5 border border-green-500/30 shadow-xl shadow-green-500/10 text-center">
            <div className="text-4xl font-bold text-green-400 mb-1">75</div>
            <p className="font-body text-xs text-zinc-400 uppercase tracking-wider">Acres</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm rounded-2xl p-5 border border-purple-500/30 shadow-xl shadow-purple-500/10 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-1">5</div>
            <p className="font-body text-xs text-zinc-400 uppercase tracking-wider">Programs</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 backdrop-blur-sm rounded-2xl p-5 border border-orange-500/30 shadow-xl shadow-orange-500/10 text-center">
            <div className="text-4xl font-bold text-orange-400 mb-1">SIU</div>
            <p className="font-body text-xs text-zinc-400 uppercase tracking-wider">Affiliated</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">

          {/* About */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 shadow-xl shadow-cyan-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <InfraIcon className="text-cyan-400" />
              </div>
              <h3 className="font-heading text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">About Institute</h3>
            </div>
            <p className="font-body text-sm text-zinc-300 leading-relaxed mb-3">
              SIT Nagpur, established in <span className="text-cyan-400 font-semibold">2021</span>, is guided by <span className="text-purple-400 font-semibold">'Vasudhaiva Kutumbakam'</span> — 'World as One Family.'
            </p>
            <p className="font-body text-sm text-zinc-300 leading-relaxed">
              Member of <span className="text-cyan-400 font-semibold">Symbiosis International University, Pune</span>, ideally positioned in Nagpur.
            </p>
          </div>

          {/* Programs */}
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/30 shadow-xl shadow-orange-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <AcademicIcon className="text-orange-400" />
              </div>
              <h3 className="font-heading text-lg bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Programs</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-xl p-3 border border-cyan-500/30">
                <p className="font-body text-xs text-cyan-400 font-medium">AI & ML</p>
              </div>
              <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-xl p-3 border border-red-500/30">
                <p className="font-body text-xs text-red-400 font-medium">Cyber Security</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl p-3 border border-purple-500/30">
                <p className="font-body text-xs text-purple-400 font-medium">AIoT</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-3 border border-green-500/30">
                <p className="font-body text-xs text-green-400 font-medium">Data Science</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-3 border border-blue-500/30 col-span-2">
                <p className="font-body text-xs text-blue-400 font-medium text-center">Cloud Computing</p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-xl shadow-purple-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <VisionIcon className="text-purple-400" />
              </div>
              <h3 className="font-heading text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Vision</h3>
            </div>
            <p className="font-body text-sm text-zinc-300 leading-relaxed">
              To be a global leader in Engineering through academic excellence, industry partnerships, research, and innovation.
            </p>
          </div>

          {/* Missions */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm rounded-2xl p-5 border border-cyan-500/30 shadow-xl shadow-cyan-500/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                  <span className="font-body text-xs text-cyan-400 font-bold">M1</span>
                </div>
                <h4 className="font-heading text-sm bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Innovative Learning</h4>
              </div>
              <p className="font-body text-xs text-zinc-400 leading-relaxed">
                Academic excellence through innovative teaching pedagogy and project-based learning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 backdrop-blur-sm rounded-2xl p-5 border border-orange-500/30 shadow-xl shadow-orange-500/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                  <span className="font-body text-xs text-orange-400 font-bold">M2</span>
                </div>
                <h4 className="font-heading text-sm bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Industry Integration</h4>
              </div>
              <p className="font-body text-xs text-zinc-400 leading-relaxed">
                Strategic partnerships offering industry-aligned learning modules.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-sm rounded-2xl p-5 border border-green-500/30 shadow-xl shadow-green-500/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                  <span className="font-body text-xs text-green-400 font-bold">M3</span>
                </div>
                <h4 className="font-heading text-sm bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Research Excellence</h4>
              </div>
              <p className="font-body text-xs text-zinc-400 leading-relaxed">
                Multidisciplinary research, innovation, and intellectual property development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm rounded-2xl p-5 border border-purple-500/30 shadow-xl shadow-purple-500/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                  <span className="font-body text-xs text-purple-400 font-bold">M4</span>
                </div>
                <h4 className="font-heading text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Entrepreneurship</h4>
              </div>
              <p className="font-body text-xs text-zinc-400 leading-relaxed">
                Inspiring entrepreneurial mind-set for sustainable community impact.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 shadow-xl shadow-cyan-500/10 text-center">
            <h3 className="font-heading text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">Learn More</h3>
            <p className="font-body text-sm text-zinc-400 mb-5">
              Explore programs, campus life, and admissions
            </p>
            <a
              href="https://sitnagpur.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-cyan-400 inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              <span>Visit Website</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function AboutSITNagpurPage() {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return (
      <>
        <SEO
          title="About SIT Nagpur - SITNovate"
          description="Learn about Symbiosis Institute of Technology, Nagpur - Building Engineers for a Global Future. Premier engineering institute established in 2021."
          url="https://sitnovate.vercel.app/about-sit-nagpur"
        />
        <div className="flex min-h-svh flex-col">
          {/* Global Progressive Blur at top of screen */}
          <ProgressiveBlur
            direction="top"
            className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
            blurIntensity={1}
          />

          {/* Add the existing Sidebar component */}
          <Sidebar />

          {/* Mobile About SIT Nagpur Section */}
          <AboutSITNagpurMobile />

          {/* Mobile Footer Section */}
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="About SIT Nagpur - SITNovate"
        description="Learn about Symbiosis Institute of Technology, Nagpur - Building Engineers for a Global Future. Premier engineering institute established in 2021."
        url="https://sitnovate.vercel.app/about-sit-nagpur"
      />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <AboutSITNagpur />
          <Footer />
        </main>
      </div>
    </>
  );
}