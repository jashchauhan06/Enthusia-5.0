export function AboutSIT() {
  return (
    <section 
      id="about-sit" 
      className="py-20 px-6 md:px-12 lg:px-16 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            ABOUT
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground">
            Symbiosis Institute of Technology, Nagpur
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Symbiosis Institute of Technology, Nagpur is a premier engineering institution 
              that stands at the forefront of technical education and innovation. Established 
              as part of the renowned Symbiosis International University, we are committed to 
              nurturing future technologists and leaders.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-2">Academic Excellence</h3>
                <p className="text-foreground/70">
                  Offering cutting-edge programs in Computer Science, Electronics, Mechanical, 
                  and Civil Engineering with industry-aligned curriculum.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-2">Innovation Hub</h3>
                <p className="text-foreground/70">
                  State-of-the-art laboratories, research facilities, and incubation centers 
                  fostering innovation and entrepreneurship.
                </p>
              </div>
              
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-2">Campus Life</h3>
                <p className="text-foreground/70">
                  Vibrant campus with modern infrastructure, sports facilities, and a 
                  thriving community of students from diverse backgrounds.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Established</span>
                  <span className="font-medium">2008</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Students</span>
                  <span className="font-medium">2000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Faculty</span>
                  <span className="font-medium">150+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Programs</span>
                  <span className="font-medium">8 B.Tech</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-foreground/80 italic">
                "To be a globally recognized center of excellence in technical education, 
                research, and innovation, creating leaders who shape the future."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}