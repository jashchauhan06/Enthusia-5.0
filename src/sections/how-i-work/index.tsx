import { Methodology } from './methodology'
import { Focus } from './focus'
import { Capabilities } from './capabilities'
import { ResponseTime } from './response-time'
import { Contact } from './contact'
import { Services } from './services'

export function HowIWork() {
  return (
    <section 
      id="how-i-work" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            🎮 CHOOSE YOUR PATH
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Two Worlds, One Experience
          </p>
          <p className="font-body text-lg text-[#b3b3b3] max-w-3xl mx-auto">
            Dive into the TechFest battlefield or immerse yourself in Cultural celebrations. 
            Each path offers unique challenges and unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[907px]:grid-cols-2 min-[1390px]:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* TechFest - Row 1 */}
          <div className="bento-square">
            <Methodology />
          </div>
          
          {/* Cultural Fest - Row 2 */}
          <div className="">
            <Focus />
          </div>
          
          {/* Event Highlights - Row 3 */}
          <div className="bento-square min-[907px]:order-4 min-[1390px]:order-3">
            <Capabilities />
          </div>

          {/* Quick Info + Contact - Row 4 */}
          <div className="flex flex-col gap-6 min-[907px]:order-3 min-[1390px]:order-4">
            <div>
              <ResponseTime />
            </div>
            <div className="bento-square">
              <Contact />
            </div>
          </div>

          {/* Past Events Gallery - Row 5 */}
          <div className="bento-no-min min-[907px]:col-span-2 min-[1390px]:col-span-2 min-[907px]:order-5 min-[1390px]:order-5">
            <Services />
          </div>
        </div>
      </div>
    </section>
  )
}
