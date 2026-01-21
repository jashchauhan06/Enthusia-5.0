import { Link } from "react-router";
import { useEffect } from "react";
import { ArrowLeft, ShieldCheck, Lock, Terminal } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { hackathonPrivacyPolicy } from "@/content/hackathon-privacy-policy";
import { GlitchText } from "@/components/ui/glitch-text";

export function PrivacyPolicyPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden font-mono">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-300 transition-colors mb-8 uppercase tracking-widest text-sm duration-300 hover:-translate-x-1"
        >
          <ArrowLeft className="w-4 h-4" />
          RETURN_TO_BASE
        </Link>

        {/* Header Section */}
        <div className="mb-12 border-b border-cyan-900/50 pb-8 relative">
          <div className="flex items-center gap-3 mb-4 text-cyan-500/60">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs tracking-[0.2em] uppercase">SECURE_CONNECTION_ESTABLISHED</span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">
            <GlitchText text="PRIVACY_PROTOCOL" />
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-500 font-mono">
            <span className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              DOC_ID: 0x8294_A
            </span>
            <span className="hidden md:block text-cyan-900">|</span>
            <span>LAST_UPDATE: {hackathonPrivacyPolicy.lastUpdated}</span>
            <span className="hidden md:block text-cyan-900">|</span>
            <span className="flex items-center gap-2 text-green-500">
              <Lock className="w-3 h-3" />
              ENCRYPTION: AES-256
            </span>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-3xl" />
        </div>

        {/* Privacy Policy Content */}
        <div className="relative bg-black/50 border border-cyan-500/20 rounded-sm p-8 md:p-12 backdrop-blur-sm shadow-[0_0_50px_-20px_rgba(6,182,212,0.1)]">
          {/* Scanline */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(6,182,212,0.02)_50%,transparent_100%)] bg-[length:100%_4px] animate-scanline pointer-events-none" />

          <div className="font-light text-gray-300 leading-relaxed text-lg space-y-8 prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <div className="relative mt-12 mb-6 group">
                    <div className="absolute -left-6 top-1.5 w-1 h-6 bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                    <h2 className="font-heading text-2xl md:text-3xl text-white tracking-wide uppercase">
                      {children}
                    </h2>
                  </div>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-gray-400 leading-relaxed border-l border-transparent hover:border-cyan-900/50 pl-4 transition-colors duration-300">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="text-cyan-400 font-normal">
                    {children}
                  </strong>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-3 mb-6 my-4 pl-4">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="mt-2 w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0" />
                    <span>{children}</span>
                  </li>
                ),
              }}
            >
              {hackathonPrivacyPolicy.content}
            </ReactMarkdown>
          </div>

          {/* Footer signature */}
          <div className="mt-16 pt-8 border-t border-dashed border-gray-800 text-center text-xs text-gray-600 font-mono uppercase tracking-widest">
            END_OF_FILE // SYSTEM_SECURE
          </div>
        </div>
      </div>
    </div>
  );
}
