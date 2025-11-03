import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Droplet, Zap, Gauge, PaintBucket, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Диагностика",
      description: "Компьютерная диагностика всех систем автомобиля",
      items: ["Электроника", "Двигатель", "Ходовая часть"],
    },
    {
      icon: Settings,
      title: "Техническое обслуживание",
      description: "Регулярное ТО по регламенту производителя",
      items: ["Замена масла", "Фильтры", "Жидкости"],
    },
    {
      icon: Gauge,
      title: "Ремонт двигателя",
      description: "Капитальный и текущий ремонт двигателей",
      items: ["Диагностика", "Ремонт", "Замена"],
    },
    {
      icon: Droplet,
      title: "Замена масла",
      description: "Быстрая замена масла и фильтров",
      items: ["Двигатель", "КПП", "Жидкости"],
    },
    {
      icon: Zap,
      title: "Электрика",
      description: "Диагностика и ремонт электрооборудования",
      items: ["Проводка", "Датчики", "Стартеры"],
    },
    {
      icon: PaintBucket,
      title: "Кузовной ремонт",
      description: "Восстановление и покраска кузова",
      items: ["Рихтовка", "Покраска", "Полировка"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг по обслуживанию и ремонту автомобилей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <CardContent className="p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary transition-colors">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-card-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
