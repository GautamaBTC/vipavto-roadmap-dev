import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock } from "lucide-react";

const Hero = () => {
  const scrollToContacts = () => {
    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Профессиональный автосервис в Шахтах
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Качественное обслуживание и ремонт автомобилей любой сложности. 
            Опытные мастера, современное оборудование, доступные цены.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToContacts}
              className="text-base group"
            >
              Записаться на сервис
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContacts}
              className="text-base bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              Узнать цены
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <Shield className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary-foreground">Гарантия качества</p>
                <p className="text-sm text-primary-foreground/80">На все виды работ</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-primary-foreground">Быстрое обслуживание</p>
                <p className="text-sm text-primary-foreground/80">Ремонт в срок</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
