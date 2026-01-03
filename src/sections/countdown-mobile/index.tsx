import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CountdownMobile() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Create target date: Feb 19, 2026, 9:00 AM IST
    // IST is UTC+5:30, so 9:00 AM IST = 3:30 AM UTC
    const targetDate = Date.UTC(2026, 1, 19, 3, 30, 0); // Month is 0-indexed (1 = February)

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
        className="bg-black border border-[#353739] rounded-xl p-4 min-w-[70px]"
      >
        <span className="font-heading text-3xl text-foreground">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="font-body text-xs text-[#b3b3b3] mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <section 
      id="skills-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="w-full max-w-md mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            ⏳ COUNTDOWN TO THE FINAL NIGHT
          </h2>
          <p className="font-heading text-2xl text-foreground mb-2">
            THE STAGE LIGHTS UP IN...
          </p>
          <p className="font-body text-sm text-[#b3b3b3]">
            February 19-21, 2026 • SIT Nagpur
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <TimeUnit value={timeLeft.days} label="Days" />
          <span className="font-heading text-3xl text-[#b3b3b3] mb-6">:</span>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <span className="font-heading text-3xl text-[#b3b3b3] mb-6">:</span>
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <span className="font-heading text-3xl text-[#b3b3b3] mb-6">:</span>
          <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>

        {/* Call to Action */}
        <div className="text-center px-4">
          <p className="font-body text-sm text-[#b3b3b3] mb-6">
            Don't miss out on this incredible three-day techno-cultural experience!
          </p>
          <a
            href="/techfest"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-heading text-base rounded-full hover:opacity-90 transition-opacity"
          >
            REGISTER NOW
          </a>
        </div>
      </div>
    </section>
  );
}
