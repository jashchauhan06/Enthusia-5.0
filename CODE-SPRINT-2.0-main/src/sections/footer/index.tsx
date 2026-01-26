import { useEffect, useState } from 'react';
import { Link } from "react-router";
import confetti from 'canvas-confetti';
import { Copy, Check, Phone, MapPin } from "lucide-react";
import { useContactForm } from '@/hooks/useContactForm';
import emailIcon from '../../assets/email-icon.svg';

// ============================================================================
// CONTACT METHODS COMPONENT
// ============================================================================
function ContactMethods() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone1, setCopiedPhone1] = useState(false);
  const [copiedPhone2, setCopiedPhone2] = useState(false);

  const email = "enthusia@sitnagpur.siu.edu.in";
  const phone1 = "+91 70207 78853 - Shlok Vij (Event Coordinator)";
  const phone2 = "+91 96047 35914 - Shruti Bawankar (Event Coordinator)";
  const venue = "Symbiosis Institute of Technology\nNagpur, Maharashtra, India";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      // Silently handle clipboard errors
    }
  };

  const handleCopyPhone1 = async () => {
    try {
      await navigator.clipboard.writeText(phone1);
      setCopiedPhone1(true);
      setTimeout(() => setCopiedPhone1(false), 2000);
    } catch (err) {
      // Silently handle clipboard errors
    }
  };

  const handleCopyPhone2 = async () => {
    try {
      await navigator.clipboard.writeText(phone2);
      setCopiedPhone2(true);
      setTimeout(() => setCopiedPhone2(false), 2000);
    } catch (err) {
      // Silently handle clipboard errors
    }
  };

  const handleVenueClick = () => {
    window.open('https://maps.app.goo.gl/dGTgnQBC1hHf19pp8', '_blank');
  };

  return (
    <div className="flex flex-col gap-4 mt-8">
      {/* Email Row */}
      <div className="group flex items-center gap-4 p-4 bg-black border-2 border-red-600/30 hover:border-red-600 transition-all transform -skew-x-3 hover:skew-x-0">
        <div className="w-12 h-12 bg-red-600/20 border border-red-600 flex items-center justify-center flex-shrink-0 skew-x-3">
          <img src={emailIcon} alt="Email" className="w-6 h-6 filter brightness-0 invert" />
        </div>
        <span className="font-mono text-white flex-1 skew-x-3 text-sm">
          {email}
        </span>
        <button
          onClick={handleCopyEmail}
          className="w-10 h-10 bg-zinc-800 border border-red-600/50 hover:bg-red-600/20 flex items-center justify-center cursor-pointer transition-colors skew-x-3"
          aria-label="Copy email address"
        >
          {copiedEmail ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5 text-red-500" />
          )}
        </button>
      </div>

      {/* Phone Row 1 */}
      <div className="group flex items-center gap-4 p-4 bg-black border-2 border-red-600/30 hover:border-red-600 transition-all transform -skew-x-3 hover:skew-x-0">
        <div className="w-12 h-12 bg-red-600/20 border border-red-600 flex items-center justify-center flex-shrink-0 skew-x-3">
          <Phone className="w-6 h-6 text-red-500" />
        </div>
        <span className="font-mono text-white flex-1 skew-x-3 text-sm">
          {phone1}
        </span>
        <button
          onClick={handleCopyPhone1}
          className="w-10 h-10 bg-zinc-800 border border-red-600/50 hover:bg-red-600/20 flex items-center justify-center cursor-pointer transition-colors skew-x-3"
          aria-label="Copy phone number"
        >
          {copiedPhone1 ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5 text-red-500" />
          )}
        </button>
      </div>

      {/* Phone Row 2 */}
      <div className="group flex items-center gap-4 p-4 bg-black border-2 border-red-600/30 hover:border-red-600 transition-all transform -skew-x-3 hover:skew-x-0">
        <div className="w-12 h-12 bg-red-600/20 border border-red-600 flex items-center justify-center flex-shrink-0 skew-x-3">
          <Phone className="w-6 h-6 text-red-500" />
        </div>
        <span className="font-mono text-white flex-1 skew-x-3 text-sm">
          {phone2}
        </span>
        <button
          onClick={handleCopyPhone2}
          className="w-10 h-10 bg-zinc-800 border border-red-600/50 hover:bg-red-600/20 flex items-center justify-center cursor-pointer transition-colors skew-x-3"
          aria-label="Copy phone number"
        >
          {copiedPhone2 ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5 text-red-500" />
          )}
        </button>
      </div>

      {/* Venue Row */}
      <div 
        onClick={handleVenueClick}
        className="group flex items-center gap-4 p-4 bg-black border-2 border-red-600/30 hover:border-red-600 transition-all transform -skew-x-3 hover:skew-x-0 cursor-pointer"
      >
        <div className="w-12 h-12 bg-red-600/20 border border-red-600 flex items-center justify-center flex-shrink-0 skew-x-3">
          <MapPin className="w-6 h-6 text-red-500" />
        </div>
        <div className="font-mono text-white flex-1 skew-x-3">
          <div className="font-bold text-red-500 text-sm uppercase tracking-wider">HIDEOUT LOCATION</div>
          <div className="text-xs text-zinc-400 whitespace-pre-line">
            {venue}
          </div>
        </div>
        <div className="w-10 h-10 bg-zinc-800 border border-red-600/50 hover:bg-red-600/20 flex items-center justify-center transition-colors skew-x-3">
          <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// FOOTER HERO COMPONENT
// ============================================================================
function FooterHero() {
  return (
    <div className="flex flex-col">
      {/* Money Heist themed header */}
      <div className="relative mb-8">
        {/* Glitch effect background */}
        <div className="absolute inset-0 bg-red-600/10 blur-xl animate-pulse" />
        
        {/* Main title with Money Heist styling */}
        <div className="relative bg-black border-2 border-red-600 p-6 transform -skew-x-6 overflow-hidden">
          {/* Scan line effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/10 to-transparent animate-scan pointer-events-none" />
          
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />
          
          <div className="relative skew-x-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
                <span className="text-black font-black text-sm">!</span>
              </div>
              <span className="text-red-500 font-mono text-xs uppercase tracking-[0.3em]">
                SECURE COMMUNICATION CHANNEL
              </span>
            </div>
            
            <h2 className="font-black text-4xl [@media(min-width:1055px)]:text-5xl [@media(min-width:1275px)]:text-6xl text-white mb-4 uppercase tracking-tighter italic">
              CONTACT THE PROFESSOR
            </h2>
            
            <p className="font-mono text-lg [@media(min-width:1045px)]:text-xl [@media(min-width:1275px)]:text-2xl font-light text-zinc-400 leading-relaxed">
              Need intel about the heist operation?<br className="hidden [@media(min-width:1024px)]:inline" />
              {' '}Establish secure contact with our team.
            </p>
          </div>
          
          {/* Bottom status bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
            <div className="h-full bg-red-600 w-full animate-pulse" />
          </div>
        </div>
      </div>
      
      <div className="hidden [@media(min-width:1024px)]:block">
        <ContactMethods />
      </div>
      
      {/* Add scan animation */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
}

// ============================================================================
// CONTACT FORM COMPONENT
// ============================================================================
function ContactForm() {
  const { isSubmitting, isSuccess, message, isSubmitSuccessful, onSubmit } = useContactForm();

  // Fireworks confetti effect
  useEffect(() => {
    if (isSubmitSuccessful && isSuccess) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) =>
        Math.random() * (max - min) + min;

      const interval = window.setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isSubmitSuccessful, isSuccess]);

  if (isSubmitSuccessful) {
    return (
      <div className="relative bg-black border-2 border-red-600 p-8 transform -skew-x-3 overflow-hidden">
        {/* Scan line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/10 to-transparent animate-scan pointer-events-none" />
        
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />
        
        <div className="relative skew-x-3 flex flex-col items-center justify-center text-center">
          {isSuccess ? (
            <>
              <div className="w-16 h-16 bg-green-600/20 border-2 border-green-500 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-black text-xl text-white mb-2 uppercase tracking-wider">TRANSMISSION SUCCESSFUL</h3>
              <p className="font-mono text-zinc-400 mb-6 text-sm">{message}</p>
              <div className="text-xs font-mono text-green-500 uppercase tracking-[0.2em]">
                ● SECURE CONNECTION ESTABLISHED
              </div>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-red-600/20 border-2 border-red-500 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-black text-xl text-white mb-2 uppercase tracking-wider">TRANSMISSION FAILED</h3>
              <p className="font-mono text-zinc-400 mb-6 text-sm">{message}</p>
              <div className="text-xs font-mono text-red-500 uppercase tracking-[0.2em]">
                ● CONNECTION COMPROMISED
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black border-2 border-red-600/50 p-6 transform -skew-x-3 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(229,9,20,0.3)_10px,rgba(229,9,20,0.3)_20px)]" />
      </div>
      
      {/* Scan line effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/5 to-transparent animate-scan pointer-events-none" />
      
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />
      
      <form onSubmit={onSubmit} className="relative skew-x-3 flex flex-col gap-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-6 bg-red-600 flex items-center justify-center">
              <span className="text-black font-black text-xs">!</span>
            </div>
            <span className="text-red-500 font-mono text-xs uppercase tracking-[0.2em]">
              ENCRYPTED MESSAGE FORM
            </span>
          </div>
        </div>

        <div>
          <label className="block font-mono text-sm font-bold text-red-500 mb-2 uppercase tracking-wider">
            Agent Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-zinc-900 border-2 border-red-600/30 focus:border-red-600 font-mono text-white placeholder:text-zinc-500 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block font-mono text-sm font-bold text-red-500 mb-2 uppercase tracking-wider">
            Secure Channel
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            required
            className="w-full px-4 py-3 bg-zinc-900 border-2 border-red-600/30 focus:border-red-600 font-mono text-white placeholder:text-zinc-500 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block font-mono text-sm font-bold text-red-500 mb-2 uppercase tracking-wider">
            Encrypted Message
          </label>
          <textarea
            name="message"
            placeholder="Your message or questions about the heist operation..."
            rows={8}
            required
            className="w-full px-4 py-3 bg-zinc-900 border-2 border-red-600/30 focus:border-red-600 font-mono text-white placeholder:text-zinc-500 focus:outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative group w-full bg-red-600 hover:bg-red-700 border-2 border-red-500 px-6 py-4 font-black text-white uppercase tracking-wider transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {/* Button glow effect */}
          <div className="absolute -inset-1 bg-red-600/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative flex items-center justify-center gap-3">
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                TRANSMITTING...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                SEND TRANSMISSION
              </>
            )}
          </div>
        </button>
        
        {/* Status indicator */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          SECURE CONNECTION ACTIVE
        </div>
      </form>
    </div>
  );
}

// ============================================================================
// FOOTER NAV COMPONENT
// ============================================================================
function FooterNav() {
  return (
    <div className="flex items-center gap-6">
      <Link 
        to="/privacy-policy"
        className="font-mono text-sm text-zinc-400 hover:text-red-500 transition-colors cursor-pointer uppercase tracking-wider border border-zinc-700 hover:border-red-600 px-3 py-1"
      >
        Privacy Policy
      </Link>
    </div>
  );
}

// ============================================================================
// FOOTER BOTTOM COMPONENT
// ============================================================================
function FooterBottom() {
  return (
    <div className="relative">
      {/* Divider line with Money Heist styling */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mb-8" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
            <span className="text-black font-black text-sm">©</span>
          </div>
          <span className="font-mono text-sm text-zinc-400">
            Copyright © 2026 CODE SPRINT 2.0 - All rights reserved
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="font-mono text-xs text-red-500 uppercase tracking-[0.2em]">
              OPERATION ACTIVE
            </span>
          </div>
          <FooterNav />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN FOOTER COMPONENT (EXPORTED)
// ============================================================================
export function Footer() {
  return (
    <section 
      id="footer" 
      className="relative pt-20 pb-8 px-6 md:px-12 lg:px-16 bg-black overflow-hidden"
    >
      {/* Money Heist background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dark overlay with red tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e50914' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-600/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <FooterHero />
          <ContactForm />
        </div>
        <FooterBottom />
      </div>
    </section>
  );
}
