export function HomeTitle() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="px-16 -mt-20 text-center">
        <h1 className="font-heading text-center text-[clamp(2rem,8vw,8rem)] leading-[0.8] tracking-tight text-foreground mb-4">
          ENTHUSIA 5.0
        </h1>
        <p className="font-body font-light text-[clamp(1rem,2vw,1.5rem)] text-white tracking-[0.2em] uppercase">
          Enter the Parallel Fest Universe
        </p>
        <p className="font-body font-light text-[clamp(0.9rem,1.5vw,1.2rem)] text-white mt-2">
          19 – 21 February 2026 • SIT Nagpur
        </p>
      </div>
    </div>
  )
}
