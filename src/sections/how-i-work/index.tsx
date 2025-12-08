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
        <div className="grid grid-cols-1 min-[907px]:grid-cols-2 min-[1390px]:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Methodology - Row 1 */}
          <div className="bento-square">
            <Methodology />
          </div>
          
          {/* Focus - Row 2 */}
          <div className="">
            <Focus />
          </div>
          
          {/* Capabilities - Row 3 */}
          <div className="bento-square min-[907px]:order-4 min-[1390px]:order-3">
            <Capabilities />
          </div>

          {/* Response Time + Contact - Row 4 */}
          <div className="flex flex-col gap-6 min-[907px]:order-3 min-[1390px]:order-4">
            <div>
              <ResponseTime />
            </div>
            <div className="bento-square">
              <Contact />
            </div>
          </div>

          {/* Services - Row 5 */}
          <div className="bento-square min-[907px]:col-span-2 min-[1390px]:col-span-2 min-[907px]:order-5 min-[1390px]:order-5">
            <Services />
          </div>
        </div>
      </div>
    </section>
  )
}
