import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    setFormData({ name: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (928) 123-45-67",
      link: "tel:+79281234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@vipauto-shahty.ru",
      link: "mailto:info@vipauto-shahty.ru",
    },
    {
      icon: MapPin,
      title: "Адрес",
      content: "г. Шахты, ул. Примерная, 123",
      link: "#map",
    },
    {
      icon: Clock,
      title: "Режим работы",
      content: "Пн-Пт: 9:00-19:00, Сб: 10:00-16:00",
      link: null,
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Запишитесь на сервис или задайте интересующий вопрос
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Опишите вашу проблему или вопрос..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = info.link ? (
                <a href={info.link} className="hover:text-primary transition-colors">
                  {info.content}
                </a>
              ) : (
                <span>{info.content}</span>
              );

              return (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">
                          {info.title}
                        </h3>
                        <div className="text-muted-foreground">{content}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <div id="map" className="rounded-lg overflow-hidden border border-border h-[300px] bg-muted">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=40.214517%2C47.709674&z=12"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="grayscale"
                title="Карта Шахты"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
