import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router";

// Icon Components
const CodeIcon = ({ className = "text-cyan-400" }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

const TrophyIcon = ({ className = "text-yellow-400" }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228V2.721m-2.48 5.228a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
  </svg>
);

const TeamIcon = ({ className = "text-purple-400" }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const SponsorIcon = ({ className = "text-green-400" }: { className?: string }) => (
  <svg className={`w-8 h-8 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H4.5m-1.5 0H3c-.621 0-1.125.504-1.125 1.125v.375m1.5 0H3.75m10.5 0h9.75m-9.75 0H15m-1.5 0H12m1.5 0v.75A.75.75 0 0112 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H12.5m-1.5 0H12c.621 0 1.125.504 1.125 1.125v.375m-1.5 0H12.75" />
  </svg>
);

// Desktop Component
function SITNovateDesktop() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen bg-black py-20 px-4 md:px-8 lg:px-16 pt-32">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="font-heading text-[8vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-8"
          >
            SITNOVATE<br/>2026
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-xl text-zinc-400 mb-8 max-w-3xl mx-auto"
          >
            24-Hour Hackathon • February 19-21, 2026 • SIT Nagpur
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">800+</div>
              <p className="text-zinc-500 text-sm">Participants</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <p className="text-zinc-500 text-sm">Teams</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24</div>
              <p className="text-zinc-500 text-sm">Hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">₹1L+</div>
              <p className="text-zinc-500 text-sm">Prize Pool</p>
            </div>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <CodeIcon className="text-cyan-400" />
            <h2 className="font-heading text-4xl text-cyan-400">About SITNovate</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/30">
              <p className="font-body text-lg text-zinc-300 leading-relaxed mb-6">
                SITNovate is the flagship 24-hour hackathon organized by Symbiosis Institute of Technology, Nagpur. 
                It's a platform where innovation meets competition, bringing together the brightest minds to solve 
                real-world problems through technology.
              </p>
              <p className="font-body text-lg text-zinc-300 leading-relaxed">
                Participants get the opportunity to work with cutting-edge technologies, learn from industry experts, 
                and compete for exciting prizes while building solutions that can make a real impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
                <h3 className="font-heading text-2xl text-purple-400 mb-6">Facilities</h3>
                <div className="space-y-6">
                  {/* Working Space */}
                  <div>
                    <h4 className="font-heading text-lg text-white mb-4">Working Space</h4>
                    <ul className="space-y-3 text-zinc-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>High-speed WiFi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Power outlets</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Comfortable seating</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Quiet zones</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Amenities */}
                  <div>
                    <h4 className="font-heading text-lg text-white mb-4">Amenities</h4>
                    <ul className="space-y-3 text-zinc-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>24/7 refreshments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Sleeping areas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Outdoor space</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>First aid station</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
                <h3 className="font-heading text-2xl text-orange-400 mb-6">What You'll Get</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-heading text-lg text-white mb-4">Experience</h4>
                    <ul className="space-y-3 text-zinc-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>24 hours of intensive coding</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Industry expert mentorship</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Networking opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Team collaboration</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-heading text-lg text-white mb-4">Rewards</h4>
                    <ul className="space-y-3 text-zinc-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cash prizes & trophies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Certificates & swag</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Internship opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Recognition & portfolio</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <TrophyIcon className="text-yellow-400" />
            <h2 className="font-heading text-4xl text-yellow-400">SITNovate 2025 Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { index: 1, ext: 'JPG' },
              { index: 2, ext: 'JPG' },
              { index: 3, ext: 'jpg' },
              { index: 4, ext: 'jpg' },
              { index: 5, ext: 'png' },
              { index: 6, ext: 'png' }
            ].map((image) => (
              <div key={image.index} className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300">
                <img
                  src={`/images/sitnovate/${image.index}.${image.ext}`}
                  alt={`SITNovate 2025 Highlight ${image.index}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-heading text-lg">SITNovate 2025</p>
                    <p className="text-zinc-300 text-sm">Memorable moments from last year</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30 text-center">
            <h3 className="font-heading text-2xl text-yellow-400 mb-4">Last Year's Success</h3>
            <p className="font-body text-lg text-zinc-300 mb-6">
              SITNovate 2025 was a tremendous success with over 500 participants, 50+ teams, and innovative solutions 
              that impressed our panel of expert judges. The event showcased the incredible talent and creativity 
              of students from across the region.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <p className="text-zinc-400 text-sm">Participants</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                <p className="text-zinc-400 text-sm">Teams</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">15</div>
                <p className="text-zinc-400 text-sm">Mentors</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">₹75K</div>
                <p className="text-zinc-400 text-sm">Prize Pool</p>
              </div>
            </div>
          </div>
        </div>

        {/* Past Sponsors Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <SponsorIcon className="text-green-400" />
            <h2 className="font-heading text-5xl bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Past Sponsors
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 backdrop-blur-sm rounded-3xl p-12 border border-green-500/30 shadow-2xl shadow-green-500/10 mb-8">
            <div className="text-center mb-12">
              <h3 className="font-heading text-3xl bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent mb-4">
                Powered by Innovation Partners
              </h3>
              <p className="font-body text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto">
                We're deeply grateful to our incredible sponsors who made <span className="text-green-400 font-semibold">SITNovate 2025</span> a 
                tremendous success and supported the next generation of innovators.
              </p>
            </div>
            
            {/* Past Sponsors Grid - Larger Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-16">
              {[
                { name: "Pizza Hut", logo: "pizzahut.png", category: "Food Partner", color: "from-red-400 to-orange-400" },
                { name: "MIA by Tanishq", logo: "MIA.png", category: "Jewelry Partner", color: "from-rose-400 to-pink-400" },
                { name: "Insterra", logo: "Insterra.webp", category: "Technology Partner", color: "from-blue-400 to-cyan-400" },
                { name: "PB Creation", logo: "PB.png", category: "Creative Partner", color: "from-purple-400 to-pink-400" },
                { name: "Devfolio", logo: "dev.png", category: "Platform Partner", color: "from-blue-500 to-indigo-500" },
                { name: "ETH India", logo: "eth.png", category: "Blockchain Partner", color: "from-purple-500 to-violet-500" },
                { name: "Polygon", logo: "poly.png", category: "Web3 Partner", color: "from-violet-400 to-purple-400" },
                { name: "Unstop", logo: "un.png", category: "Hiring Partner", color: "from-blue-600 to-cyan-600" },
                { name: "UCN", logo: "R.png", category: "Media Partner", color: "from-orange-500 to-red-500" }
              ].map((sponsor, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 backdrop-blur-sm rounded-3xl p-10 border border-zinc-700/50 hover:border-green-500/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-500/25 min-h-[280px] flex flex-col justify-center">
                    {/* Enhanced glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/15 group-hover:to-emerald-500/15 rounded-3xl transition-all duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 p-4 shadow-xl">
                        <img 
                          src={`/images/sponsors/${sponsor.logo}`} 
                          alt={sponsor.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="font-heading text-2xl text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                        {sponsor.name}
                      </h4>
                      <p className={`text-base font-semibold bg-gradient-to-r ${sponsor.color} bg-clip-text text-transparent`}>
                        {sponsor.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Call to Action Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-sm rounded-2xl p-10 border border-green-500/30 text-center">
                <h3 className="font-heading text-3xl bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
                  Join the Innovation Journey
                </h3>
                <p className="font-body text-lg text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Ready to be part of <span className="text-green-400 font-semibold">SITNovate 2026</span>? 
                  Partner with us to empower the next generation of tech innovators and be at the forefront of technological advancement.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-12 py-4 rounded-full font-heading text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>Become a Sponsor</span>
                    <motion.span 
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <TeamIcon className="text-purple-400" />
            <h2 className="font-heading text-4xl text-purple-400">Our Team</h2>
          </div>
          
          {/* Faculty Coordinators */}
          <div className="mb-12">
            <h3 className="font-heading text-2xl text-purple-400 mb-6 text-center">Faculty Coordinators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Dr. Rajesh Kumar", role: "Event Director", dept: "Computer Science" },
                { name: "Prof. Priya Sharma", role: "Technical Head", dept: "Information Technology" },
                { name: "Dr. Amit Patel", role: "Industry Relations", dept: "Computer Science" }
              ].map((faculty, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-2xl text-purple-400">{faculty.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h4 className="font-heading text-lg text-white mb-1">{faculty.name}</h4>
                  <p className="text-purple-400 text-sm mb-1">{faculty.role}</p>
                  <p className="text-zinc-400 text-xs">{faculty.dept}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Student Organizing Committee */}
          <div>
            <h3 className="font-heading text-2xl text-cyan-400 mb-6 text-center">Student Organizing Committee</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Arjun Mehta", role: "Event Lead", year: "Final Year" },
                { name: "Sneha Gupta", role: "Technical Lead", year: "Third Year" },
                { name: "Rohit Singh", role: "Logistics Head", year: "Final Year" },
                { name: "Kavya Reddy", role: "Marketing Head", year: "Third Year" },
                { name: "Vikram Joshi", role: "Sponsorship Lead", year: "Final Year" },
                { name: "Ananya Das", role: "Design Head", year: "Second Year" },
                { name: "Karan Sharma", role: "Registration Lead", year: "Third Year" },
                { name: "Pooja Agarwal", role: "Hospitality Head", year: "Second Year" }
              ].map((student, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-heading text-sm text-cyan-400">{student.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h4 className="font-heading text-sm text-white mb-1">{student.name}</h4>
                  <p className="text-cyan-400 text-xs mb-1">{student.role}</p>
                  <p className="text-zinc-400 text-xs">{student.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <motion.div 
          style={{ y }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/5 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="font-heading text-4xl text-white mb-4">Ready to Join SITNovate 2026?</h2>
            <p className="font-body text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Register now and be part of the most exciting 24-hour hackathon in central India. 
              Build, innovate, and compete with the best minds in technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/register')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-12 py-4 rounded-full font-heading text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Register Now
              </button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-transparent border-2 border-cyan-500/50 hover:border-cyan-500 px-12 py-4 rounded-full font-heading text-lg text-cyan-400 hover:text-white transition-all duration-300"
              >
                Back to Top
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Mobile Component
function SITNovateMobile() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen bg-black py-16 px-4 pt-28">
      <div className="max-w-2xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4">
            SITNOVATE<br/>2026
          </h1>
          <p className="font-body text-sm text-zinc-400 mb-6">
            24-Hour Hackathon • Feb 19-21, 2026
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-xl p-4 border border-cyan-500/30 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">500+</div>
              <p className="text-zinc-500 text-xs">Participants</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl p-4 border border-purple-500/30 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">24</div>
              <p className="text-zinc-500 text-xs">Hours</p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <CodeIcon className="text-cyan-400 w-6 h-6" />
            <h2 className="font-heading text-2xl text-cyan-400">About SITNovate</h2>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-2xl p-6 border border-cyan-500/30">
            <p className="font-body text-sm text-zinc-300 leading-relaxed mb-4">
              SITNovate is the flagship 24-hour hackathon organized by SIT Nagpur. 
              A platform where innovation meets competition.
            </p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                24 hours of intensive coding
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                Industry expert mentorship
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                Exciting prizes & recognition
              </li>
            </ul>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <TrophyIcon className="text-yellow-400 w-6 h-6" />
            <h2 className="font-heading text-2xl text-yellow-400">2025 Highlights</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { index: 1, ext: 'JPG' },
              { index: 2, ext: 'JPG' },
              { index: 3, ext: 'jpg' },
              { index: 4, ext: 'jpg' },
              { index: 5, ext: 'png' },
              { index: 6, ext: 'png' }
            ].map((image) => (
              <div key={image.index} className="relative overflow-hidden rounded-xl">
                <img
                  src={`/images/sitnovate/${image.index}.${image.ext}`}
                  alt={`Highlight ${image.index}`}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/5 rounded-2xl p-6 border border-yellow-500/30 text-center">
            <h3 className="font-heading text-lg text-yellow-400 mb-3">Last Year's Success</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-yellow-400">500+</div>
                <p className="text-zinc-400 text-xs">Participants</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">₹75K</div>
                <p className="text-zinc-400 text-xs">Prize Pool</p>
              </div>
            </div>
          </div>
        </div>

        {/* Past Sponsors Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <SponsorIcon className="text-green-400 w-6 h-6" />
            <h2 className="font-heading text-3xl bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Past Sponsors
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 shadow-xl shadow-green-500/10">
              <div className="text-center mb-6">
                <h3 className="font-heading text-xl bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent mb-3">
                  Innovation Partners
                </h3>
                <p className="font-body text-sm text-zinc-300 leading-relaxed">
                  Grateful to our amazing sponsors who made <span className="text-green-400 font-semibold">SITNovate 2025</span> possible.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mb-8">
                {[
                  { name: "Pizza Hut", logo: "pizzahut.png", category: "Food Partner", color: "from-red-400 to-orange-400" },
                  { name: "MIA by Tanishq", logo: "MIA.png", category: "Jewelry Partner", color: "from-rose-400 to-pink-400" },
                  { name: "Insterra", logo: "Insterra.webp", category: "Technology Partner", color: "from-blue-400 to-cyan-400" },
                  { name: "Devfolio", logo: "dev.png", category: "Platform Partner", color: "from-blue-500 to-indigo-500" },
                  { name: "ETH India", logo: "eth.png", category: "Blockchain Partner", color: "from-purple-500 to-violet-500" },
                  { name: "Polygon", logo: "poly.png", category: "Web3 Partner", color: "from-violet-400 to-purple-400" }
                ].map((sponsor, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-zinc-800/70 to-zinc-900/90 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 min-h-[160px] flex flex-col justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 p-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                          <img 
                            src={`/images/sponsors/${sponsor.logo}`} 
                            alt={sponsor.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h4 className="font-heading text-lg text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
                          {sponsor.name}
                        </h4>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${sponsor.color} bg-clip-text text-transparent`}>
                          {sponsor.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-lg"></div>
                <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 text-center">
                  <h3 className="font-heading text-lg bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                    Join SITNovate 2026
                  </h3>
                  <p className="font-body text-sm text-zinc-300 mb-6 leading-relaxed">
                    Ready to sponsor the next generation of innovators?
                  </p>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="group relative overflow-hidden w-full bg-gradient-to-r from-green-500 to-emerald-500 py-3 rounded-full font-heading text-white shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Become a Sponsor</span>
                      <motion.span 
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <TeamIcon className="text-purple-400 w-6 h-6" />
            <h2 className="font-heading text-2xl text-purple-400">Our Team</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg text-purple-400 mb-4">Faculty Coordinators</h3>
              <div className="space-y-3">
                {[
                  { name: "Dr. Rajesh Kumar", role: "Event Director" },
                  { name: "Prof. Priya Sharma", role: "Technical Head" }
                ].map((faculty, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-xl p-4 border border-purple-500/30 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                      <span className="font-heading text-sm text-purple-400">{faculty.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h4 className="font-heading text-sm text-white">{faculty.name}</h4>
                      <p className="text-purple-400 text-xs">{faculty.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-heading text-lg text-cyan-400 mb-4">Student Committee</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Arjun Mehta", role: "Event Lead" },
                  { name: "Sneha Gupta", role: "Technical Lead" },
                  { name: "Rohit Singh", role: "Logistics Head" },
                  { name: "Kavya Reddy", role: "Marketing Head" }
                ].map((student, index) => (
                  <div key={index} className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-xl p-3 border border-cyan-500/30 text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="font-heading text-xs text-cyan-400">{student.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <h4 className="font-heading text-xs text-white mb-1">{student.name}</h4>
                    <p className="text-cyan-400 text-xs">{student.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/5 rounded-2xl p-6 border border-cyan-500/30 text-center">
          <h2 className="font-heading text-2xl text-white mb-3">Join SITNovate 2026</h2>
          <p className="font-body text-sm text-zinc-400 mb-6">
            Register now for the most exciting hackathon experience.
          </p>
          <button 
            onClick={() => navigate('/register')}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-3 rounded-full font-heading text-white"
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export function SITNovatePage() {
  const { isMobile } = useBreakpoint();

  return (
    <>
      <SEO
        title="SITNovate 2026 - 24-Hour Hackathon"
        description="Join SITNovate 2026, the flagship 24-hour hackathon at SIT Nagpur. Innovation meets competition. Register now!"
        url="https://sitnovate.vercel.app/sitnovate"
      />
      <motion.div className="flex min-h-svh flex-col bg-black text-white selection:bg-primary selection:text-black">
        {isMobile ? (
          <>
            <ProgressiveBlur direction="top" className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none" blurIntensity={1}/>
            <Sidebar />
            <SITNovateMobile />
            <Footer />
          </>
        ) : (
          <>
            <NavBar />
            <main className="w-full">
              <SITNovateDesktop />
              <Footer />
            </main>
          </>
        )}
      </motion.div>
    </>
  );
}