import { Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const whatsappUrl = "https://wa.me/393517198161";
  const primaryEmail = "botagoz@student.elte.hu";
  const secondaryEmail = "botagoz.beisekova@studenti.unipd.it";

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground text-center mb-4">
          Contact
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          You can contact me via email or WhatsApp for brief inquiries or to schedule 
          an introductory meeting.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email Card */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-heading font-medium text-lg text-foreground">
                Email
              </h3>
            </div>
            <div className="space-y-2">
              <a 
                href={`mailto:${primaryEmail}`}
                className="block text-foreground hover:text-primary transition-colors break-all"
              >
                {primaryEmail}
              </a>
              <a 
                href={`mailto:${secondaryEmail}`}
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm break-all"
              >
                {secondaryEmail}
              </a>
            </div>
            <Button 
              asChild
              variant="outline"
              className="w-full mt-4"
            >
              <a href={`mailto:${primaryEmail}?subject=Inquiry - Psychological Consultation`}>
                Send Email
              </a>
            </Button>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <MessageCircle className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-heading font-medium text-lg text-foreground">
                WhatsApp
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Quick messages and scheduling
            </p>
            <Button 
              asChild
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Response time notice */}
        <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <p className="text-sm">
            I usually respond within 24–48 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;