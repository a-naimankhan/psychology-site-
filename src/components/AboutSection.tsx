
import BotaPic from "../assets/Bota-Picture.jpeg";

const AboutSection = (): JSX.Element => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto container-narrow">
        <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground text-center mb-12">
          Обо мне
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Photo placeholder */}
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-56 md:w-56 md:h-64 rounded-lg bg-secondary border border-border overflow-hidden shadow-sm">
            <img
              src={BotaPic}
              alt="Бота Бейсекова – Психолог"
              className="w-full h-full object-cover"
            />
            </div>
          </div>

          {/* About text */}
          <div className="md:col-span-2 space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Меня зовут <strong className="text-foreground">Ботагоз Бейсекова</strong>, и я родом из Казахстана. 
              В настоящее время я прохожу докторантуру по психологии в ELTE в Будапеште, где моя работа курируется доктором Адриенн Уйхели.
            </p>
            
            <p>
              Я считаю, что многие люди в первую очередь нуждаются в пространстве, где их могут услышать без осуждения 
              или предвзятости. В своей работе я опираюсь на доказательные принципы <strong className="text-foreground">когнитивно-поведенческой 
              терапии (КПТ)</strong> и <strong className="text-foreground">гуманистической психологии</strong>. 
              
              
            </p>
            
            <p>
              Мои академические и профессиональные интересы сосредоточены на психологическом благополучии в 
              контексте современных вызовов, включая социально-политические факторы, экономическое давление, 
              и современные технологии, такие как социальные сети и ИИ.
            </p>
            
            
            <div className="pt-4 border-t border-border">
              <p className="font-medium text-foreground">
                Я предлагаю сессии на:
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