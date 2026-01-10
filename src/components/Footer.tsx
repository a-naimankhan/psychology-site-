const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="font-heading text-xl mb-2">Botagoz Beisekova</p>
          <p className="text-sm text-background/70 mb-4">
            Multilingual Psychologist in Europe
          </p>
          <div className="flex justify-center gap-4 text-sm text-background/60">
            <a href="#home" className="hover:text-background transition-colors">Home</a>
            <span>•</span>
            <a href="#about" className="hover:text-background transition-colors">About</a>
            <span>•</span>
            <a href="#contact" className="hover:text-background transition-colors">Contact</a>
          </div>
          <p className="text-xs text-background/50 mt-6">
            © {currentYear} Botagoz Beisekova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;