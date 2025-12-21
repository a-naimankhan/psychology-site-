import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 gradient-blue-moon">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-foreground leading-tight mb-6">
              Multilingual Psychologist in Budapest
            </h1>
            
            <div className="space-y-4 text-foreground/80 text-base md:text-lg leading-relaxed">
              <p>
                I offer online psychological consultations for adults who want to better understand 
                themselves, cope with challenges, and make meaningful changes in their lives. Sessions 
                provide a confidential and supportive space for reflection, emotional exploration, and 
                practical strategies to improve well-being and daily functioning.
              </p>
              
              <p>
                I am here for people who are struggling with life's difficulties, including moments of 
                stress, low confidence, or major life transitions. The focus and goals of the consultations 
                are discussed collaboratively and may evolve over time.
              </p>
              
              <p className="font-medium">
                Sessions are available in video, audio, or text-based formats.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                asChild
                className="bg-blue-moon-dark hover:bg-blue-moon-dark/90 text-primary-foreground px-6 py-3"
              >
                <a href="#contact">Book a Free Consultation</a>
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-foreground/30 hover:bg-foreground/5"
              >
                <a href="#about">Learn More About Me</a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/30 border-4 border-background shadow-xl overflow-hidden flex items-center justify-center">
                {/* Placeholder for photo - will be replaced */}
                <div className="text-center p-8">
                  <p className="text-muted-foreground text-sm">Photo coming soon</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent/50 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-moon-dark/20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;