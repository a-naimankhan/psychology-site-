import { GraduationCap } from "lucide-react";
import diplomaBachelor from "@/assets/diploma-bachelor.jpg";
import diplomaMaster from "@/assets/diploma-master.jpg";

const qualifications = [
  {
    degree: "Doctoral Candidate in Psychology (PhD)",
    status: "ongoing",
    institution: "Eötvös Loránd University (ELTE), Budapest, Hungary",
  },
  {
    degree: "Master's in Developmental and Educational Psychology",
    status: "(2023–2025)",
    note: "Qualified to practice as Psychologist",
    institution: "University of Padua, Italy",
  },
  {
    degree: "Bachelor's in Psychology",
    status: "(2018–2022)",
    institution: "Eötvös Loránd University (ELTE), Budapest, Hungary",
  },
];

const QualificationsSection = () => {
  return (
    <section id="qualifications" className="section-padding bg-background">
      <div className="container mx-auto container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground text-center mb-12">
          Qualifications
        </h2>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {qualifications.map((qual, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 mt-2 z-10 ring-4 ring-background"></div>

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}>
                  <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                    <div className={`flex items-start gap-3 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}>
                      <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-foreground" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="font-heading font-medium text-lg text-foreground">
                          {qual.degree}
                        </h3>
                        <p className="text-sm text-primary font-medium mt-1">
                          {qual.status}
                        </p>
                        {qual.note && (
                          <p className="text-sm text-muted-foreground italic mt-1">
                            {qual.note}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground mt-2">
                          {qual.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Diplomas */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="font-heading font-medium text-xl text-foreground text-center mb-8">
            Academic Documents
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3">
              <img 
                src={diplomaBachelor} 
                alt="Bachelor's Degree Certificate - Eötvös Loránd University" 
                className="w-full h-auto"
              />
              <p className="text-sm text-muted-foreground text-center">
                Bachelor of Arts in Psychology — ELTE, 2022
              </p>
            </div>
            <div className="space-y-3">
              <img 
                src={diplomaMaster} 
                alt="Master's Degree Diploma - University of Padua" 
                className="w-full h-auto"
              />
              <p className="text-sm text-muted-foreground text-center">
                Master's in Developmental and Educational Psychology — Padua, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;