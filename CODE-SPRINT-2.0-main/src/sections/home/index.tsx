import { ParticleSphere } from './model/particle-sphere'
import { HomeTitle } from './content/home-title'
import { HomeInfoGrid } from './content/home-info-grid'
import { AvailabilityStatus } from './content/availability-status'

export function Home() {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 bg-background">
        <ParticleSphere />
      </div>

      {/* Desktop Layout */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <div className="flex-1 flex items-center">
          <HomeTitle />
        </div>
        <div className="flex-1 flex items-center mt-16">
          <div className="w-full">
            <HomeInfoGrid />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <AvailabilityStatus />
        </div>
      </div>
    </section>
  )
}
