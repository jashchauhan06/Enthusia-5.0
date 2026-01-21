import { useState } from "react";
import { Copy, Check, Phone, MapPin } from "lucide-react";
import emailIcon from '../../../assets/email-icon.svg';

export function ContactMethods() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone1, setCopiedPhone1] = useState(false);
  const [copiedPhone2, setCopiedPhone2] = useState(false);

  const email = "enthusia@sitnagpur.siu.edu.in";
  const phone1 = "+91 70207 78853 - Shlok Vij (Event Lead)";
  const phone2 = "+91 96047 35914 - Shruti Bawankar (Event Lead)";
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
      <div className="group flex items-center gap-4 p-4 rounded-2xl border border-border transition-all hover:border-[#555759] hover:transform hover:-translate-y-0.5">
        <div className="w-12 h-12 rounded-lg border border-border group-hover:border-[#555759] transition-colors flex items-center justify-center flex-shrink-0">
          <img src={emailIcon} alt="Email" className="w-6 h-6" />
        </div>
        <span className="font-body text-foreground flex-1">
          {email}
        </span>
        <button
          onClick={handleCopyEmail}
          className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent cursor-pointer transition-colors"
          aria-label="Copy email address"
        >
          {copiedEmail ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          )}
        </button>
      </div>

      {/* Phone Row 1 */}
      <div className="group flex items-center gap-4 p-4 rounded-2xl border border-border transition-all hover:border-[#555759] hover:transform hover:-translate-y-0.5">
        <div className="w-12 h-12 rounded-lg border border-border group-hover:border-[#555759] transition-colors flex items-center justify-center flex-shrink-0">
          <Phone className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
        <span className="font-body text-foreground flex-1">
          {phone1}
        </span>
        <button
          onClick={handleCopyPhone1}
          className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent cursor-pointer transition-colors"
          aria-label="Copy phone number"
        >
          {copiedPhone1 ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          )}
        </button>
      </div>

      {/* Phone Row 2 */}
      <div className="group flex items-center gap-4 p-4 rounded-2xl border border-border transition-all hover:border-[#555759] hover:transform hover:-translate-y-0.5">
        <div className="w-12 h-12 rounded-lg border border-border group-hover:border-[#555759] transition-colors flex items-center justify-center flex-shrink-0">
          <Phone className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
        <span className="font-body text-foreground flex-1">
          {phone2}
        </span>
        <button
          onClick={handleCopyPhone2}
          className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent cursor-pointer transition-colors"
          aria-label="Copy phone number"
        >
          {copiedPhone2 ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          )}
        </button>
      </div>

      {/* Venue Row */}
      <div 
        onClick={handleVenueClick}
        className="group flex items-center gap-4 p-4 rounded-2xl border border-border transition-all hover:border-[#555759] hover:transform hover:-translate-y-0.5 cursor-pointer"
      >
        <div className="w-12 h-12 rounded-lg border border-border group-hover:border-[#555759] transition-colors flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
        </div>
        <div className="font-body text-foreground flex-1">
          <div className="font-semibold">Venue</div>
          <div className="text-sm text-muted-foreground whitespace-pre-line">
            {venue}
          </div>
        </div>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
          <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>


    </div>
  );
}
