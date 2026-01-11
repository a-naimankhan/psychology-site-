
import BotaPic from "../assets/Bota-Picture.jpeg";

const AboutSection = (): JSX.Element => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Photo placeholder */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-56 md:w-56 md:h-64 rounded-lg bg-secondary border border-border overflow-hidden shadow-sm">
            <img
              src={BotaPic}
              alt="Bota Beisekova – Psychologist"
              className="w-full h-full object-cover"
            />
            </div>
          </div>

          {/* About text */}
          <div className="md:col-span-2 space-y-5 text-foreground/85 leading-relaxed">
            <p>
              My name is <strong className="text-foreground">Botagoz Beisekova</strong>, and I am originally from Kazakhstan. 
              I’m currently pursuing my PhD in Psychology at ELTE in Budapest, where my work is supervised by Dr. Adrienn  Ujhelyi.
            </p>
            
            <p>
              I believe that many people primarily need a space where they can be heard without judgment 
              or bias. In my work, I draw on evidence-based principles from <strong className="text-foreground">Cognitive-Behavioural 
              Therapy (CBT)</strong> and <strong className="text-foreground">Humanistic psychology</strong>. 
              
              
            </p>
            
            <p>
              My academic and professional interests focus on psychological well-being in the 
              context of contemporary challenges, including socio-political factors, economic pressures, 
              and modern technologies such as social media and AI.
            </p>
            
            
            <div className="pt-4 border-t border-border">
              <p className="font-medium text-foreground">
                I offer sessions in:
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["English", "Kazakh", "Russian", "Turkish"].map((lang) => (
                  <span 
                    key={lang}
                    className="px-4 py-2 bg-primary/20 text-foreground rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;