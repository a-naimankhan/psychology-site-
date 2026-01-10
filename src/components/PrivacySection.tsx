import { Shield, Lock, FileText } from "lucide-react";

const PrivacySection = () => {
  return (
    <section id="privacy" className="section-padding bg-secondary/30">
      <div className="container mx-auto container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground text-center mb-4">
          Privacy & Confidentiality
        </h2>
        

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-heading font-medium text-lg text-foreground mb-2">
              Confidential Sessions
            </h3>
            <p className="text-sm text-muted-foreground">
              All sessions are strictly confidential and conducted in a safe, private environment
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-heading font-medium text-lg text-foreground mb-2">
              Secure Platforms
            </h3>
            <p className="text-sm text-muted-foreground">
              Online sessions are conducted via secure, encrypted platforms
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-heading font-medium text-lg text-foreground mb-2">
              GDPR Compliant
            </h3>
            <p className="text-sm text-muted-foreground">
              Data processing in accordance with EU GDPR regulations
            </p>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
            <p>
              All sessions are confidential. Personal data is collected solely for the purpose of 
              providing psychological services and communication. Data is stored securely and not 
              shared with third parties, except where required by law or in cases of serious risk of harm.
            </p>
            
            <p>
              Online sessions are conducted via secure platforms. By booking a session, you consent 
              to the processing of your personal data in accordance with GDPR regulations.
            </p>
            
            <p className="font-medium text-foreground">
              A detailed informed consent form will be provided prior to the first session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;