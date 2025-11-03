import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Работаем со всеми марками автомобилей",
    "Используем оригинальные запчасти и расходники",
    "Прозрачная система ценообразования",
    "Предварительная запись онлайн",
    "Удобное расположение в центре города",
    "Комфортная зона ожидания для клиентов",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              О нашем автосервисе
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              VipАвто — это современный автосервис в городе Шахты, Ростовская область. 
              Мы специализируемся на обслуживании и ремонте автомобилей всех марок.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Наша команда состоит из опытных специалистов, которые постоянно повышают 
              свою квалификацию и следят за новинками автомобильной индустрии. Мы используем 
              только качественные запчасти и современное оборудование, что позволяет нам 
              гарантировать высокое качество выполняемых работ.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-primary mb-4">15+</div>
                <div className="text-2xl font-semibold text-foreground mb-2">лет опыта</div>
                <div className="text-muted-foreground">в автосервисе</div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">5000+</div>
                    <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Гарантия качества</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
