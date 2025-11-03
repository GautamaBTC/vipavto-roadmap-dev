import { Award, Users, Wrench, ShieldCheck } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Award,
      title: "15+ лет опыта",
      description: "Наша команда работает в сфере автосервиса более 15 лет",
    },
    {
      icon: Users,
      title: "Профессионалы",
      description: "Сертифицированные мастера с многолетним опытом работы",
    },
    {
      icon: Wrench,
      title: "Современное оборудование",
      description: "Используем новейшее диагностическое и ремонтное оборудование",
    },
    {
      icon: ShieldCheck,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все выполненные работы",
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы заботимся о вашем автомобиле как о своем собственном
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-10 w-10 text-accent-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
