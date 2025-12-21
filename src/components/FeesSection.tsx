import { Clock, Video, MessageSquare, Headphones, AlertCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const feeItems = [
  {
    title: "Introductory Meeting",
    duration: "20 minutes",
    price: "Free (€0)",
    icon: Clock,
    highlight: true,
  },
  {
    title: "Online Video Session",
    duration: "60 minutes",
    price: "€50 / 19,000 HUF",
    icon: Video,
  },
  {
    title: "Reduced Fee",
    subtitle: "Students, unemployed, maternity leave",
    duration: "60 minutes",
    price: "€40 / 15,000 HUF",
    icon: Clock,
  },
  {
    title: "Online Text-Based Session",
    duration: "60 minutes",
    price: "€45 / 17,000 HUF",
    icon: MessageSquare,
  },
  {
    title: "Online Audio-Based Session",
    duration: "60 minutes",
    price: "€45 / 17,000 HUF",
    icon: Headphones,
  },
];

const FeesSection = () => {
  return (
    <section id="fees" className="section-padding bg-secondary/30">
      <div className="container mx-auto container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground text-center mb-12">
          Fees
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {feeItems.map((item, index) => (
            <Card 
              key={index}
              className={`transition-all hover:shadow-md ${
                item.highlight 
                  ? "bg-primary/20 border-primary/40" 
                  : "bg-card"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${item.highlight ? "bg-primary/30" : "bg-secondary"}`}>
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-medium text-lg text-foreground">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      {item.duration}
                    </p>
                    <p className="font-medium text-foreground mt-2">
                      {item.price}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cancellation Policy */}
        <Card className="mt-8 bg-muted/50 border-muted">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-medium text-lg text-foreground mb-2">
                  Cancellation Policy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Appointments may be cancelled or rescheduled with at least 24 hours' notice. 
                  Cancellations made with less than 24 hours' notice or missed appointments may 
                  be charged in full.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeesSection;