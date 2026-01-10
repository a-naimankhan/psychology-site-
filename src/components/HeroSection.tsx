import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 gradient-blue-moon">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image - Centered above title */}
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
              <img 
                src={profilePhoto} 
                alt="Bota - Psychologist in Europe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-3xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-foreground leading-tight mb-6">
              Multilingual Psychologist in Europe
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

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;