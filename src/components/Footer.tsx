const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">V</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-card-foreground">VipАвто</h3>
                <p className="text-xs text-muted-foreground">Автосервис</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональное обслуживание и ремонт автомобилей в Шахтах
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-card-foreground mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>г. Шахты, ул. Примерная, 123</li>
              <li>
                <a href="tel:+79281234567" className="hover:text-primary transition-colors">
                  +7 (928) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@vipauto-shahty.ru" className="hover:text-primary transition-colors">
                  info@vipauto-shahty.ru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-card-foreground mb-4">Режим работы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Понедельник - Пятница: 9:00 - 19:00</li>
              <li>Суббота: 10:00 - 16:00</li>
              <li>Воскресенье: Выходной</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} VipАвто. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
