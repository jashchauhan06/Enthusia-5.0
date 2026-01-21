export function AboutSITMobile() {
  return (
    <section 
      id="about-sit-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="max-w-sm mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            ABOUT
          </h2>
          <p className="font-heading text-2xl text-foreground">
            Symbiosis Institute of Technology, Nagpur
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-foreground/80 leading-relaxed text-center">
            Premier engineering institution committed to nurturing future technologists 
            and leaders through excellence in education and innovation.
          </p>
          
          <div className="space-y-4">
            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-semibold text-foreground mb-2">Academic Excellence</h3>
              <p className="text-sm text-foreground/70">
                Cutting-edge programs in Computer Science, Electronics, Mechanical, 
                and Civil Engineering.
              </p>
            </div>
            
            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-semibold text-foreground mb-2">Innovation Hub</h3>
              <p className="text-sm text-foreground/70">
                State-of-the-art labs, research facilities, and incubation centers.
              </p>
            </div>
            
            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-semibold text-foreground mb-2">Campus Life</h3>
              <p className="text-sm text-foreground/70">
                Vibrant campus with modern infrastructure and thriving community.
              </p>
            </div>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2 text-center">Quick Facts</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="text-center">
                <div className="font-bold text-primary">2008</div>
                <div className="text-foreground/70">Established</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-primary">2000+</div>
                <div className="text-foreground/70">Students</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-primary">150+</div>
                <div className="text-foreground/70">Faculty</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-primary">8</div>
                <div className="text-foreground/70">B.Tech Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}