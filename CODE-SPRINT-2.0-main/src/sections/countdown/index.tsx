import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Create target date: Feb 12, 2026, 9:00 AM IST
    // IST is UTC+5:30, so 9:00 AM IST = 3:30 AM UTC
    const targetDate = Date.UTC(2026, 1, 12, 3, 30, 0); // Month is 0-indexed (1 = February)

    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-black border border-[#353739] rounded-2xl p-6 md:p-8 min-w-[80px] md:min-w-[120px]"
      >
        <span className="font-heading text-4xl md:text-6xl text-foreground">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="font-body text-sm md:text-base text-[#b3b3b3] mt-3 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <section 
      id="skills" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            ⏳ COUNTDOWN TO THE FINAL NIGHT
          </h2>
          <p className="font-heading text-2xl md:text-3xl text-foreground mb-2">
            THE STAGE LIGHTS UP IN...
          </p>
          <p className="font-body text-base text-[#b3b3b3]">
            February 12-14, 2026 • SIT Nagpur
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-12">
          <TimeUnit value={timeLeft.days} label="Days" />
          <span className="font-heading text-4xl md:text-6xl text-[#b3b3b3] mb-8">:</span>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <span className="font-heading text-4xl md:text-6xl text-[#b3b3b3] mb-8">:</span>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <span className="font-heading text-4xl md:text-6xl text-[#b3b3b3] mb-8">:</span>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="font-body text-[#b3b3b3] mb-6">
            Don't miss out on this incredible three-day techno-cultural experience!
          </p>
          <a
            href="/techfest"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-heading text-lg rounded-full hover:opacity-90 transition-opacity"
          >
            REGISTER NOW
          </a>
        </div>
      </div>
    </section>
  );
}
